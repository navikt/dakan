import React from 'react'
import { LabelMedium as BaseLabel } from 'baseui/typography'
import { useStyletron } from 'baseui'
import { merge } from '../../utils/merge'

export const Label = (props) => {
  const [, theme] = useStyletron()

  const { overrides, children, ...rest } = props
  const mergedOverides = merge(
    overrides || {},
    (theme && theme.labelOverrides) || {},
  )

  return (
    <BaseLabel {...rest} overrides={mergedOverides}>
      <b>{children}</b>
    </BaseLabel>
  )
}

export default Label
