import * as React from 'react'
import axios from 'axios'
import { Block } from 'baseui/block'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'baseui/modal'
import Cookies from 'js-cookie'
import { KIND } from 'baseui/button'
import { useStyletron } from 'baseui'

import { ModalButton } from '../../../../components/button/Button'

export const DeleteUserTextModal = (props) => {
  const {
    isOpen,
    setIsOpen,
    index,
    userTextContent,
    userTexts,
    setUserTexts,
    clientUser,
    server,
  } = props
  const [, theme] = useStyletron()

  const deleteUserText = () => {
    const tokenId = Cookies.get('ClientToken')
    const newUserTexts = [...userTexts]
    newUserTexts.splice(index, 1)
    axios
      .delete(`${server}/node/delete/id/${userTextContent.id}`, {
        headers: { 'JWT-Token': tokenId },
      })
      .then((response) => {
        console.log(response)
        setUserTexts(newUserTexts)
      })
      .catch((error) => console.log(error))
  }

  let content = (
    <React.Fragment>
      <ModalBody>
        <Block $style={{ ...theme.typography.font300 }}>
          Du er ikke autorisert til å slette.
        </Block>
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
          Avbryt
        </ModalButton>
      </ModalFooter>
    </React.Fragment>
  )

  const checkAuthor = () => {
    if (
      userTextContent &&
      userTextContent.properties &&
      userTextContent.properties.author &&
      clientUser &&
      clientUser.userId
    ) {
      if (
        Array.isArray(userTextContent.properties.author) &&
        userTextContent.properties.author.filter(
          (userId) => userId === clientUser.userId,
        )
      ) {
        return true
      }
      if (userTextContent.properties.author === clientUser.userId) {
        return true
      }
      return false
    } else {
      return false
    }
  }

  if (checkAuthor()) {
    content = (
      <React.Fragment>
        <ModalBody>
          <Block $style={{ ...theme.typography.font300 }}>
            Bekreft at du vil slette.
          </Block>
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
            Avbryt
          </ModalButton>
          <ModalButton
            onClick={() => {
              deleteUserText()
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
export default DeleteUserTextModal
