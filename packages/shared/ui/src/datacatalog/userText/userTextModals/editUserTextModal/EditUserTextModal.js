import * as React from 'react'
import axios from 'axios'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE } from 'baseui/modal'
import { Textarea } from 'baseui/textarea'
import Cookies from 'js-cookie'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'

import { ModalButton } from '../../../../components/button/Button'
import GetValue from '../../../../utils/GetValue/GetValue'
import GetCurrentDate, {
  GetCurrentTime,
} from '../../../../utils/GetCurrentDate/GetCurrentDate'
import { KIND } from 'baseui/button'

export const EditSingleUserTextModal = (props) => {
  const {
    title,
    isOpen,
    setIsOpen,
    userText,
    setUserText,
    clientUser,
    server,
  } = props

  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(GetValue(() => userText[0].properties.text))
  }, [userText])

  const addUserText = () => {
    const tokenId = Cookies.get('ClientToken')
    const userTextCopy = userText ? [...userText] : []

    const userTextAuthor = Array.isArray(userTextCopy[0].properties.author)
      ? [...userTextCopy[0].properties.author]
      : [userTextCopy[0].properties.author]

    userTextAuthor.filter((author) => author === clientUser.userId).length > 0
      ? userTextAuthor
      : userTextAuthor.push(clientUser.userId)

    const newUserText = {
      id: userTextCopy[0].id,
      label: userTextCopy[0].label,
      properties: {
        type: userTextCopy[0].properties.type,
        author: userTextAuthor,
        text: text,
        date: GetCurrentDate(),
        time: GetCurrentTime(),
      },
    }

    axios
      .put(`${server}/node`, [newUserText], {
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => setUserText([newUserText]))
      .catch((error) => console.log(error))
    setText('')
  }

  return (
    <Modal
      overrides={{
        Dialog: {
          style: {
            maxWidth: '1200px',
            width: '100%',
          },
        },
      }}
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      <ModalHeader>Rediger</ModalHeader>
      <ModalBody>
        <Block>
          <Textarea
            rows={10}
            overrides={{
              InputContainer: {
                style: {
                  height: '100%',
                },
              },
            }}
            onChange={(e) => setText(e.target.value)}
            placeholder={`Skriv en ${title.toLowerCase()}...`}
            value={text}
          />
        </Block>
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
          Avbryt
        </ModalButton>
        <ModalButton
          onClick={() => {
            addUserText()
            setIsOpen(false)
          }}
        >
          Lagre
        </ModalButton>
      </ModalFooter>
    </Modal>
  )
}

export const EditUserTextModal = (props) => {
  const {
    title,
    isOpen,
    setIsOpen,
    userTextContent,
    userTextIndex,
    userTexts,
    setUserTexts,
    clientUser,
    server,
  } = props
  const [text, setText] = React.useState('')
  const [, theme] = useStyletron()

  React.useEffect(() => {
    setText(GetValue(() => userTextContent.properties.text))
  }, [userTextContent])

  const addUserText = () => {
    const tokenId = Cookies.get('ClientToken')
    const newUserTexts = userTexts ? [...userTexts] : []
    const newUserText = {
      id: userTextContent.id,
      label: userTextContent.label,
      properties: {
        type: userTextContent.properties.type,
        author: userTextContent.properties.author,
        text: text,
        date: GetCurrentDate(),
        time: GetCurrentTime(),
      },
    }

    newUserTexts.splice(userTextIndex, 1)
    newUserTexts.unshift(newUserText)

    axios
      .put(`${server}/node`, [newUserText], {
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => setUserTexts(newUserTexts))
      .catch((error) => console.log(error))
    setText('')
  }

  let content = (
    <React.Fragment>
      <ModalHeader />
      <ModalBody>
        <Block $style={{ ...theme.typography.font300 }}>
          Du er ikke autorisert til å redigere.
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
        <ModalHeader>Rediger</ModalHeader>
        <ModalBody>
          <Block>
            <Textarea
              rows={10}
              overrides={{
                InputContainer: {
                  style: {
                    height: '100%',
                  },
                },
              }}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Skriv en ${title.toLowerCase()}...`}
              value={text}
            />
          </Block>
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
            Avbryt
          </ModalButton>
          <ModalButton
            onClick={() => {
              addUserText()
              setIsOpen(false)
            }}
          >
            Lagre
          </ModalButton>
        </ModalFooter>
      </React.Fragment>
    )
  }

  return (
    <Modal
      overrides={{
        Dialog: {
          style: {
            maxWidth: '1200px',
            width: '100%',
          },
        },
      }}
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      {content}
    </Modal>
  )
}
export default EditUserTextModal
