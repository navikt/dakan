import * as React from 'react'
import axios from 'axios'
import { Block } from 'baseui/block'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'baseui/modal'
import Cookies from 'js-cookie'
import { KIND } from 'baseui/button'
import { useStyletron } from 'baseui'

import { ModalButton } from '../../../../components/button/Button'
import { GetValue } from '../../../../utils/GetValue/GetValue'

export const DeleteCommentModal = (props) => {
  const {
    isOpen,
    setIsOpen,
    index,
    commentContent,
    comments,
    setComments,
    clientUser,
    server,
  } = props
  const [, theme] = useStyletron()

  const deleteComment = () => {
    const tokenId = Cookies.get('ClientToken')
    const newTableComments = [...comments]
    newTableComments.splice(index, 1)
    axios
      .delete(`${server}/node/delete/id/${commentContent.id}`, {
        headers: { 'JWT-Token': tokenId },
      })
      .then((response) => {
        console.log(response)
        setComments(newTableComments)
      })
      .catch((error) => console.log(error))
  }

  let content = (
    <React.Fragment>
      <ModalBody>
        <Block $style={{ ...theme.typography.font300 }}>
          Du er ikke autorisert til å slette kommentaren.
        </Block>
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
          Avbryt
        </ModalButton>
      </ModalFooter>
    </React.Fragment>
  )

  if (
    GetValue(() => clientUser.userId, '') ===
    GetValue(() => commentContent.properties.author, '')
  ) {
    content = (
      <React.Fragment>
        <ModalBody>
          <Block $style={{ ...theme.typography.font300 }}>
            Bekreft at du vil slette kommentaren.
          </Block>
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
            Avbryt
          </ModalButton>
          <ModalButton
            onClick={() => {
              deleteComment()
              setIsOpen(false)
            }}
          >
            Slett
          </ModalButton>
        </ModalFooter>
      </React.Fragment>
    )
  }

  return (
    <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <ModalHeader />
      {content}
    </Modal>
  )
}
export default DeleteCommentModal
