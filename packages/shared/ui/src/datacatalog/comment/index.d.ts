import * as React from 'react'

export interface ToggleCommentsProps {
  comments?: any
  setComments?: any
  dataId?: any
  edgeLabel: string
  nodeLabel: string
  title?: string
}

export declare const ToggleComments: React.FC<ToggleCommentsProps>
export default ToggleComments
export * from './commentModals'
