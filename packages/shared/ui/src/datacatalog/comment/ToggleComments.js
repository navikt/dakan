import * as React from 'react'
import { Accordion } from 'baseui/accordion'
import { Panel } from '../accordion/Panel'
import { Block } from 'baseui/block'
import { KIND } from 'baseui/button'
import { LabelLarge, LabelMedium } from 'baseui/typography'
import { useClientUser } from '@dakan/hooks'
import { useStyletron } from 'baseui'
import env from '@beam-australia/react-env'

import { Button } from '../../components/button/Button'
import AddCommentModal from './commentModals/addCommentModal/AddCommentModal'
import EditCommentModal from './commentModals/editCommentModal/EditCommentModal'
import DeleteCommentModal from './commentModals/deleteCommentModal/DeleteCommentModal'
import GetValue from '../../utils/GetValue/GetValue'
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized'
import CapitalizeString from '../../utils/CapitalizeString'
import {
  AddIcon,
  DeleteIcon,
  DeleteHoverIcon,
  EditIcon,
  EditHoverIcon,
} from '../../components/icons'

const graph_server = env('GRAPH_SERVER')

export const ToggleComments = (prop) => {
  const { dataId, comments, setComments, title, edgeLabel, nodeLabel } = prop
  const [commentIndex, setCommentIndex] = React.useState(0)
  const [commentContent, setCommentContent] = React.useState({})
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false)
  const [isAddCommentOpen, setIsAddCommentOpen] = React.useState(false)
  const [isEditCommentOpen, setIsEditCommentOpen] = React.useState(false)
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
            setIsAddCommentOpen(true)
          })
        }}
      >
        Legg til
      </Button>
    </Block>
  )

  const getComments = () => {
    return comments.map((comment, index) => {
      return (
        comment &&
        comment.properties && (
          <Block
            marginBottom="scale800"
            padding="scale100"
            key={nodeLabel + '_' + index}
          >
            <Block display="flex">
              <Block flex="1">
                <Block display={['block', 'block', 'flex']}>
                  <Block flex="1">
                    <LabelLarge>{comment.properties.author}</LabelLarge>
                  </Block>
                  <Block marginRight="scale400">
                    <Block $style={{ ...theme.typography.font300 }}>
                      {'Publisert ' +
                        comment.properties.date +
                        ', kl. ' +
                        comment.properties.time}
                    </Block>
                  </Block>
                </Block>
                <Block
                  $style={{ ...theme.typography.font300 }}
                  marginTop="scale800"
                >
                  {comment.properties.comment}
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
                      setCommentIndex(index)
                      setCommentContent(comment)
                      setIsEditCommentOpen(true)
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
                      setCommentIndex(index)
                      setCommentContent(comment)
                      setIsDeleteModalOpen(true)
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
            comments={comments}
            setComments={setComments}
            isOpen={isAddCommentOpen}
            setIsOpen={setIsAddCommentOpen}
            clientUser={clientUser}
            server={graph_server}
            edgeLabel={edgeLabel}
            nodeLabel={nodeLabel}
          />
          <EditCommentModal
            title={title}
            isOpen={isEditCommentOpen}
            setIsOpen={setIsEditCommentOpen}
            commentContent={commentContent}
            commentIndex={commentIndex}
            comments={comments}
            setComments={setComments}
            clientUser={clientUser}
            server={graph_server}
          />
          <DeleteCommentModal
            isOpen={isDeleteModalOpen}
            setIsOpen={setIsDeleteModalOpen}
            index={commentIndex}
            commentContent={commentContent}
            comments={comments}
            setComments={setComments}
            clientUser={clientUser}
            server={graph_server}
          />
          <LabelMedium>
            <b>{CapitalizeString(title)}</b>
          </LabelMedium>
          {comments && comments.length > 0 && comments[0].properties ? (
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
export default ToggleComments
