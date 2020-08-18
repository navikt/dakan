import React from 'react'
import { Tag as BaseTag } from 'baseui/tag'
import { useStyletron, createTheme } from 'baseui'
import { merge } from '../../utils/merge'

export const Tag = (props) => {
  const [, theme] = useStyletron()

  const { overrides, children, ...rest } = props

  let themeOverrides = merge(overrides || {}, theme.tagOverrides || {})

  const localOverrides = {
    Root: {
      style: {},
    },
  }

  if (props.backgroundColor) {
    localOverrides.Root.style.backgroundColor = props.backgroundColor
  }

  if (props.borderColor) {
    localOverrides.Root.style.border= `2px ${props.borderColor} solid`
  }

  const mergedOverrides = merge(themeOverrides, localOverrides)

  return (
    <BaseTag {...props} overrides={mergedOverrides}>
      {children}
    </BaseTag>
  )
}

export default Tag
