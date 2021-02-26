import * as React from 'react'
import { ThemeProvider, navTheme } from '@dakan/theme'

import PersonTable from './PersonTable'

export default {
  title: 'Components/PersonTable',
}

const members = {}

export const NAV_content_item = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <PersonTable members={members} />
    </ThemeProvider>
  )
}
