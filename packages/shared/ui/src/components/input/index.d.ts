import * as React from 'react'
import { InputProps } from 'baseui/input'

export interface ThemedInputProps {
  theme?: any
}

export declare const Input: React.FC<InputProps & ThemedInputProps>
export default Input
