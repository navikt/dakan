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
import AddCommentModal from './userTextModals/addCommentModal/AddCommentModal'
import EditCommentModal from './userTextModals/editCommentModal/EditCommentModal'
import DeleteCommentModal from './userTextModals/deleteCommentModal/DeleteCommentModal'
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

export const ToggleUserText = (prop) => {
  const { dataId, userTexts, setUserTexts, title, edgeLabel, nodeLabel } = prop
  const [userTextIndex, setUserTextIndex] = React.useState(0)
  const [userTextContent, setUserTextContent] = React.useState({})
  const [isDeleteTextModalOpen, setIsDeleteTextModalOpen] = React.useState(false)
  const [isAddTextModalOpen, setIsAddTextModalOpen] = React.useState(false)
  const [isEditTextModalOpen, setIsEditTextModalOpen] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState('')
  const [panelTitle, setPanelTitle] = React.useState('Vis mer')
  const [commentSize, setCommentSize] = React.useState('250px')

  const clientUser = useClientUser()

  const [, theme] = useStyletron()

  const getAddCommentButton = () => (
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
        Legg til
      </Button>
    </Block>
  )

  const getComments = () => {
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
          <AddCommentModal
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
          <EditCommentModal
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
          <DeleteCommentModal
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
            <Block padding="1em" backgroundColor={"#F4F4F4"}>
              <Block $style={{ maxHeight: commentSize, overflowY: 'scroll' }}>
                {getComments()}
              </Block>
              <Block paddingTop="scale400">
                <Accordion
                  onChange={(e) => {
                    setIsExpanded(GetValue(() => e.expanded[0].toString(), ''))
                    if (GetValue(() => e.expanded[0].toString(), '') === '0') {
                      setCommentSize('600px')
                      setPanelTitle('Vis mindre')
                    } else {
                      setCommentSize('250px')
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
              {getAddCommentButton()}
            </Block>
          ) : getAddCommentButton()}
        </Block>
      }
    </Block>
  )
}
export default ToggleUserText
