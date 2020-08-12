import * as React from 'react'

export interface ToggleUserTextProps {
  userTexts?: any
  setUserTexts?: any
  dataId?: any
  edgeLabel: string
  nodeLabel: string
  title?: string
}

export declare const ToggleUserText: React.FC<ToggleUserTextProps>
export default ToggleUserText
export * from './userTextModals'
