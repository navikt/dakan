import React from 'react'
import { Select as BaseSelect } from 'baseui/select'
import { useStyletron } from 'baseui'
import { merge } from '../../utils/merge'

export const Select = (props) => {
  const [, theme] = useStyletron()

  const { overrides, children, ariaLabel, ...rest } = props
  const mergedOverrides = merge(
    overrides || {},
    (theme && theme.selectOverrides) || {},
  )

  const aria_label=ariaLabel || ""
  return (
    <BaseSelect aria-label={aria_label} {...rest} overrides={mergedOverrides}>
      {children}
    </BaseSelect>
  )
}

export default Select
