import * as React from 'react'
import { ThemeProvider, navTheme } from '../../theme'

import { ContentItems } from './ContentItems'

export default {
  title: 'Components/ContentItems'
}


const ITEMS = [
    { item: 'epost', label: 'Epost' },
    { item: 'tlf', label: 'telefon' },
    { item: 'avdeling', label: 'avdeling' },
    { item: 'resourcetype', label: 'Ansatt' },
    { item: 'startdato', label: 'Startdato' },
    { item: 'sluttdato', label: 'Sluttdato' },
  ]

const item = {
    "properties": {
        "tlf": "2122232425",
        "epost": "Ola.Normann@nav.no",
        "startdato": "2006-06-23",
        "sluttdato": "None"
        }
}

export const NAV_content_item = () => {
  return (
    <ThemeProvider theme={navTheme()}>
      <ContentItems ITEMS={ITEMS} item={item}/>
    </ThemeProvider>
  )
}
