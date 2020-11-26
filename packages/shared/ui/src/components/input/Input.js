import React from 'react'
import { Input as BaseInput } from 'baseui/input'
import { useStyletron } from 'baseui'
import { merge } from '../../utils/merge'

export const Input = (props) => {
  const [, theme] = useStyletron()

  const { overrides, children, ...rest } = props
  const mergedOverides = merge(
    overrides || {},
    (theme && theme.inputOverrides) || {},
  )

  return (
    <BaseInput {...rest} overrides={mergedOverides}>
      {children}
    </BaseInput>
  )
}

export default Input
