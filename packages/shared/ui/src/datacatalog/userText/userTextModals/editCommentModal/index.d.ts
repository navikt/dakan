import * as React from 'react'

export interface EditCommentModalProps {
  isOpen?: any
  setIsOpen?: any
  commentContent?: any
  commentIndex?: any
  comments?: any
  setComments?: any
  tokenId?: any
  server?: any
  title?: string
}

export declare const EditCommentModal: React.FC<EditCommentModalProps>
