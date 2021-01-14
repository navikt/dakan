import React from 'react'
import { Checkbox as BaseCheckbox } from 'baseui/checkbox'
import { useStyletron } from 'baseui'
import { merge } from '../../utils/merge'

export const Checkbox = (props) => {
  const [, theme] = useStyletron()

  const { overrides, children, ariaLabel, ...rest } = props
  const aria_label=ariaLabel || ""
  const mergedOverrides = merge(
    overrides || {},
    (theme && theme.checkboxOverrides) || {},
  )

  return (
    <BaseCheckbox ariaLabel={aria_label} {...rest} overrides={mergedOverrides}>
      {children}
    </BaseCheckbox>
  )
}

export default Checkbox
