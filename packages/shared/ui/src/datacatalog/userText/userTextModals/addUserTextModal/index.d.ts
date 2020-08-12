import * as React from 'react'

export interface AddUserTextModalProps {
  isOpen?: any
  setIsOpen?: any
  userTexts?: any
  setUserTexts?: any
  tagOptions?: any
  dataId?: any
  server?: any
  tokenId?: any
  clientUser?: any
  title?: string
  edgeLabel: string
  nodeLabel: string
}

export declare const AddUserTextModal: React.FC<AddUserTextModalProps>
export default AddUserTextModal
