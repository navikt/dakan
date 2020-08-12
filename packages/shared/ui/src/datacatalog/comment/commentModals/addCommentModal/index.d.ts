import * as React from 'react'

export interface AddCommentModalProps {
  isOpen?: any
  setIsOpen?: any
  comments?: any
  setComments?: any
  tagOptions?: any
  dataId?: any
  server?: any
  tokenId?: any
  clientUser?: any
  title?: string
  edgeLabel: string
  nodeLabel: string
}

export declare const AddCommentModal: React.FC<AddCommentModalProps>
export default AddCommentModal
