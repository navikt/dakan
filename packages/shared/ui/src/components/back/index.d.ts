import * as React from 'react'
import { SHAPE, SIZE, KIND } from 'baseui/button'

export interface BackButtonProps {
  theme?: any
  spec?: any
  type?: any
  key?: any
  config?: any
  kind?: KIND['minimal']
  shape?: SHAPE['pill']
  size?: SIZE['compact']
}

export declare const BackButton: React.FC<BackButtonProps>
export declare const BackLink: React.FC<BackButtonProps>
