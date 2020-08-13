import * as React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'baseui/modal'
import { Textarea } from 'baseui/textarea'
import shortid from 'shortid'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'
import { Spinner } from 'baseui/spinner'

import CapitalizeString from '../../../../utils/CapitalizeString/CapitalizeString'
import { ModalButton } from '../../../../components/button/Button'
import GetCurrentDate, {
  GetCurrentTime,
} from '../../../../utils/GetCurrentDate/GetCurrentDate'
import { KIND } from 'baseui/button'

export const AddUserTextModal = (props) => {
  const {
    title,
    dataId,
    userTexts,
    setUserTexts,
    isOpen,
    setIsOpen,
    clientUser,
    server,
    edgeLabel,
    nodeLabel
  } = props
  const [text, setText] = React.useState('')
  const [showSpinner, setShowSpinner] = React.useState(false)

  const [, theme] = useStyletron()

  const addText = () => {
    const tokenId = Cookies.get('ClientToken')
    const newUserTexts = userTexts ? [...userTexts] : []
    const newUserText = {
      id: `${dataId}.${nodeLabel}_${shortid.generate()}`,
      label: nodeLabel,
      properties: {
        type: nodeLabel,
        author: clientUser.userId,
        text: text,
        date: GetCurrentDate(),
        time: GetCurrentTime(),
      },
    }
    newUserTexts.unshift(newUserText)
    const userTextPayload = {
      source_id: dataId,
      edge_label: edgeLabel,
      node_body: newUserText,
    }
    axios
      .put(`${server}/node/edge/upsert`, userTextPayload, {
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => {
        setUserTexts(newUserTexts)
        setShowSpinner(false)
        setIsOpen(false)
      })
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
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false)
        setShowSpinner(false)
      }}
    >
      <ModalHeader />
      {showSpinner ? (
        <Block
          alignContent="center"
          justifyContent="center"
          marginBottom="scale1000"
        >
          <Block
            display="flex"
            justifyContent="center"
            marginBottom="scale300"
            $style={{ ...theme.typography.font300 }}
          >
            {`${CapitalizeString(title)} lagres...`}
          </Block>
          <Block
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner size={98} />
          </Block>
        </Block>
      ) : (
        <Block>
          <ModalBody>
            <Textarea
              rows={10}
              overrides={{
                InputContainer: {
                  style: {
                    height: '250px',
                  },
                },
              }}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Skriv en ${title.toLowerCase()}...`}
              value={text}
            />
          </ModalBody>
          <ModalFooter>
            <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
              Avbryt
            </ModalButton>
            <ModalButton
              onClick={() => {
                addText()
                setShowSpinner(true)
              }}
            >
              Lagre
            </ModalButton>
          </ModalFooter>
        </Block>
      )}
    </Modal>
  )
}
export default AddUserTextModal
