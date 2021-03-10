import * as React from 'react'
import ErrorPage from './ErrorPage'
import { ThemeProvider, navTheme } from '@dakan/theme'

export default {
  title: 'Components/Error Page',

  parameters: {
    component: ErrorPage,
  },
}

export const Error_page_full_layout = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <ErrorPage header layout errorMessage="Test" />
    </ThemeProvider>
  )
}

export const Error_page_without_header = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <ErrorPage layout errorMessage="Test" />
    </ThemeProvider>
  )
}

export const Error_page_without_layout = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <ErrorPage header errorMessage="Test" />
    </ThemeProvider>
  )
}

export const Error_page = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <ErrorPage errorMessage="Test" />
    </ThemeProvider>
  )
}