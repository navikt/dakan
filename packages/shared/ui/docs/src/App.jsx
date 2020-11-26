import * as React from 'react'
import { Input, ThemeProvider, NAV } from '@data-catalog/ui'

export default function App() {
  return (
    <ThemeProvider theme={NAV}>
      <Input />
    </ThemeProvider>
  )
}
