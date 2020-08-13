import * as React from 'react'
import axios from 'axios'
import { Block } from 'baseui/block'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'baseui/modal'
import Cookies from 'js-cookie'
import { KIND } from 'baseui/button'
import { useStyletron } from 'baseui'

import { ModalButton } from '../../../../components/button/Button'
import { GetValue } from '../../../../utils/GetValue/GetValue'

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

  if (
    GetValue(() => clientUser.userId, '') ===
    GetValue(() => userTextContent.properties.author, '')
  ) {
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
