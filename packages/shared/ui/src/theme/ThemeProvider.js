import * as React from 'react'
import { BaseProvider, lightThemePrimitives, createTheme } from 'baseui'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

const engine = new Styletron()

const Breakpoints = {
  small: 769,
  medium: 1024,
  large: 1216,
}

const getResponsiveTheme = (breakpoints) => {
  return Object.keys(breakpoints).reduce(
    (acc, key) => {
      acc.mediaQuery[
        key
      ] = `@media screen and (min-width: ${breakpoints[key]}px)`
      return acc
    },
    {
      breakpoints,
      mediaQuery: {},
    },
  )
}

export const Theme = createTheme(
  {
    ...lightThemePrimitives,
  },
  {
    ...getResponsiveTheme(Breakpoints),
  },
)

export const ThemeProvider = (props) => {
  let ThemeUsed = Theme
  if (props.theme) {
    ThemeUsed = { ...Theme, ...props.theme }
  }
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={ThemeUsed}>{props.children}</BaseProvider>
    </StyletronProvider>
  )
}

export default ThemeProvider
