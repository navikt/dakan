import * as React from 'react'

export interface ToggleUserTextProps {
  userTexts?: any
  setUserTexts?: any
  dataId?: any
  edgeLabel: string
  nodeLabel: string
  title?: string
  isEditMode?: boolean
}
export interface SingleUserTextProps {
  userText?: any
  setUserText?: any
  dataId?: any
  edgeLabel: string
  nodeLabel: string
  title?: string
  isEditMode?: boolean
}

export declare const ToggleUserText: React.FC<ToggleUserTextProps>
export declare const SingleUserText: React.FC<SingleUserTextProps>
export default ToggleUserText
export * from './userTextModals'
