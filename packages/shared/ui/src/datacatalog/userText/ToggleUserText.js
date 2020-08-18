import * as React from 'react'
import { Accordion } from 'baseui/accordion'
import { Panel } from '../accordion/Panel'
import { Block } from 'baseui/block'
import { KIND } from 'baseui/button'
import { H5, LabelLarge } from 'baseui/typography'
import { useClientUser } from '@dakan/hooks'
import { useStyletron } from 'baseui'
import env from '@beam-australia/react-env'

import { Button } from '../../components/button/Button'
import AddUserTextModal from './userTextModals/addUserTextModal/AddUserTextModal'
import EditUserTextModal, { EditSingleUserTextModal } from './userTextModals/editUserTextModal/EditUserTextModal'
import DeleteUserTextModal from './userTextModals/deleteUserTextModal/DeleteUserTextModal'
import GetValue from '../../utils/GetValue/GetValue'
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized'
import CapitalizeString from '../../utils/CapitalizeString/CapitalizeString'
import {
  AddIcon,
  DeleteIcon,
  DeleteHoverIcon,
  EditIcon,
  EditHoverIcon,
} from '../../components/icons'

const graph_server = env('GRAPH_SERVER') || '../'

const getAddTextButton = (setIsAddTextModalOpen, title) => (
  <Block display="flex" paddingTop="scale400">
    <Button
      kind={KIND.secondary}
      startEnhancer={<AddIcon />}
      startEnhancerHover={<AddIcon fill="white" />}
      onClick={() => {
        CheckIfAuthorized(() => {
          setIsAddTextModalOpen(true)
        })
      }}
    >
      Legg til {title ? title.toLowerCase() : ''}
    </Button>
  </Block>
)

export const SingleUserText = (prop) => {
  const { dataId, userText, setUserText, title, edgeLabel, nodeLabel } = prop
  const [isDeleteTextModalOpen, setIsDeleteTextModalOpen] = React.useState(
    false,
  )
  const [isAddTextModalOpen, setIsAddTextModalOpen] = React.useState(false)
  const [isEditTextModalOpen, setIsEditTextModalOpen] = React.useState(false)

  const clientUser = useClientUser()

  const [, theme] = useStyletron()

  const getUserText = () => {
    return (
      userText &&
      userText[0].properties && (
        <Block
          marginBottom="scale800"
          padding="scale100"
        >
          <Block display="flex">
            <Block flex="1">
              <Block display={['block', 'block', 'flex']}>
                <Block marginRight="scale400">
                  <Block $style={{ ...theme.typography.font300 }}>
                    {'Publisert ' +
                      userText[0].properties.date +
                      ', kl. ' +
                      userText[0].properties.time}
                  </Block>
                </Block>
              </Block>
              <Block
                $style={{ ...theme.typography.font300 }}
                marginTop="scale800"
              >
                {userText[0].properties.text}
              </Block>
            </Block>
          </Block>
          <Block marginTop="scale800" display="flex">
            <Block marginRight="scale800">
              <Button
                startEnhancer={<EditIcon />}
                startEnhancerHover={<EditHoverIcon />}
                kind={KIND.minimal}
                onClick={() => {
                  CheckIfAuthorized(() => {
                    setIsEditTextModalOpen(true)
                  })
                }}
              >
                Rediger
                </Button>
            </Block>
            <Block>
              <Button
                startEnhancer={<DeleteIcon />}
                startEnhancerHover={<DeleteHoverIcon />}
                kind={KIND.minimal}
                onClick={() => {
                  CheckIfAuthorized(() => {
                    setIsDeleteTextModalOpen(true)
                  })
                }}
              >
                Slett
                </Button>
            </Block>
          </Block>
          <Block
            $style={{ border: '1px solid #78706A' }}
            marginTop="scale400"
          />
        </Block>
      )
    )
  }

  const getContent = () => {
    if (userText && userText.length > 0) {
      return (
        <Block padding="1em" backgroundColor={'#F4F4F4'}>
          <Block>
            {getUserText()}
          </Block>
        </Block>
      )
    } else {
      return getAddTextButton(setIsAddTextModalOpen, title)
    }
  }

  return (
    <Block>
      {
        <Block>
          <AddUserTextModal
            title={title}
            dataId={dataId}
            userTexts={userText}
            setUserTexts={setUserText}
            isOpen={isAddTextModalOpen}
            setIsOpen={setIsAddTextModalOpen}
            clientUser={clientUser}
            server={graph_server}
            edgeLabel={edgeLabel}
            nodeLabel={nodeLabel}
          />
          <EditSingleUserTextModal
            title={title}
            isOpen={isEditTextModalOpen}
            setIsOpen={setIsEditTextModalOpen}
            userText={userText}
            setUserText={setUserText}
            clientUser={clientUser}
            server={graph_server}
          />
          {userText && userText.length > 0 && (
            <DeleteUserTextModal
              isOpen={isDeleteTextModalOpen}
              setIsOpen={setIsDeleteTextModalOpen}
              index={0}
              userTextContent={userText[0]}
              userTexts={userText}
              setUserTexts={setUserText}
              clientUser={clientUser}
              server={graph_server}
            />)}
          <H5>
            <b>{CapitalizeString(title)}</b>
          </H5>
          {getContent()}
        </Block>
      }
    </Block>
  )
}

export const ToggleUserText = (prop) => {
  const { dataId, userTexts, setUserTexts, title, edgeLabel, nodeLabel } = prop
  const [userTextIndex, setUserTextIndex] = React.useState(0)
  const [userTextContent, setUserTextContent] = React.useState({})
  const [isDeleteTextModalOpen, setIsDeleteTextModalOpen] = React.useState(
    false,
  )
  const [isAddTextModalOpen, setIsAddTextModalOpen] = React.useState(false)
  const [isEditTextModalOpen, setIsEditTextModalOpen] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState('')
  const [panelTitle, setPanelTitle] = React.useState('Vis mer')
  const [textScreenSize, setTextScreenSize] = React.useState('250px')

  const clientUser = useClientUser()

  const [, theme] = useStyletron()

  const getUserTexts = () => {
    return userTexts.map((userText, index) => {
      return (
        userText &&
        userText.properties && (
          <Block
            marginBottom="scale800"
            padding="scale100"
            key={nodeLabel + '_' + index}
          >
            <Block display="flex">
              <Block flex="1">
                <Block display={['block', 'block', 'flex']}>
                  <Block flex="1">
                    <LabelLarge>{userText.properties.author}</LabelLarge>
                  </Block>
                  <Block marginRight="scale400">
                    <Block $style={{ ...theme.typography.font300 }}>
                      {'Publisert ' +
                        userText.properties.date +
                        ', kl. ' +
                        userText.properties.time}
                    </Block>
                  </Block>
                </Block>
                <Block
                  $style={{ ...theme.typography.font300 }}
                  marginTop="scale800"
                >
                  {userText.properties.text}
                </Block>
              </Block>
            </Block>
            <Block marginTop="scale800" display="flex">
              <Block marginRight="scale800">
                <Button
                  startEnhancer={<EditIcon />}
                  startEnhancerHover={<EditHoverIcon />}
                  kind={KIND.minimal}
                  onClick={() => {
                    CheckIfAuthorized(() => {
                      setUserTextIndex(index)
                      setUserTextContent(userText)
                      setIsEditTextModalOpen(true)
                    })
                  }}
                >
                  Rediger
                </Button>
              </Block>
              <Block>
                <Button
                  startEnhancer={<DeleteIcon />}
                  startEnhancerHover={<DeleteHoverIcon />}
                  kind={KIND.minimal}
                  onClick={() => {
                    CheckIfAuthorized(() => {
                      setUserTextIndex(index)
                      setUserTextContent(userText)
                      setIsDeleteTextModalOpen(true)
                    })
                  }}
                >
                  Slett
                </Button>
              </Block>
            </Block>
            <Block
              $style={{ border: '1px solid #78706A' }}
              marginTop="scale400"
            />
          </Block>
        )
      )
    })
  }

  return (
    <Block>
      {
        <Block>
          <AddUserTextModal
            title={title}
            dataId={dataId}
            userTexts={userTexts}
            setUserTexts={setUserTexts}
            isOpen={isAddTextModalOpen}
            setIsOpen={setIsAddTextModalOpen}
            clientUser={clientUser}
            server={graph_server}
            edgeLabel={edgeLabel}
            nodeLabel={nodeLabel}
          />
          <EditUserTextModal
            title={title}
            isOpen={isEditTextModalOpen}
            setIsOpen={setIsEditTextModalOpen}
            userTextContent={userTextContent}
            userTextIndex={userTextIndex}
            userTexts={userTexts}
            setUserTexts={setUserTexts}
            clientUser={clientUser}
            server={graph_server}
          />
          <DeleteUserTextModal
            isOpen={isDeleteTextModalOpen}
            setIsOpen={setIsDeleteTextModalOpen}
            index={userTextIndex}
            userTextContent={userTextContent}
            userTexts={userTexts}
            setUserTexts={setUserTexts}
            clientUser={clientUser}
            server={graph_server}
          />
          <H5>
            <b>{CapitalizeString(title)}</b>
          </H5>
          {userTexts && userTexts.length > 0 && userTexts[0].properties ? (
            <Block padding="1em" backgroundColor={'#F4F4F4'}>
              <Block $style={{ maxHeight: textScreenSize, overflowY: 'scroll' }}>
                {getUserTexts()}
              </Block>
              <Block paddingTop="scale400">
                <Accordion
                  onChange={(e) => {
                    setIsExpanded(GetValue(() => e.expanded[0].toString(), ''))
                    if (GetValue(() => e.expanded[0].toString(), '') === '0') {
                      setTextScreenSize('600px')
                      setPanelTitle('Vis mindre')
                    } else {
                      setTextScreenSize('250px')
                      setPanelTitle('Vis mer')
                    }
                  }}
                >
                  <Panel
                    overrides={{
                      Header: { style: { backgroundColor: '#F4F4F4' } },
                    }}
                    title={panelTitle}
                    isExpanded={isExpanded === '0'}
                  />
                </Accordion>
              </Block>
              {getAddTextButton(setIsAddTextModalOpen, title)}
            </Block>
          ) : (
              getAddTextButton(setIsAddTextModalOpen, title)
            )}
        </Block>
      }
    </Block>
  )
}
export default ToggleUserText
