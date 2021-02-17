import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from '@dakan/ui'
import { ThemeProvider, navTheme } from '@dakan/theme'
import Viewer from './pages/Viewer'
import env from '@beam-australia/react-env'
import { Block } from 'baseui/block'

const title = env('TITLE') || 'Data'
const link = env('HOME_URL') || '../'

export default function App() {
  return (
    <ThemeProvider theme={navTheme()}>
      <Header
        config={{
          brand: title,
          nav: true,
          about: true,
          aboutLink: 'https://data.nav.no/about',
          link: link,
        }}
      />
      <Switch>
        <Route exact path="/person/:id" component={Viewer} />
        <Route
          component={() => (
            <Block display="flex" justifyContent="center" role="main">
              Viewer id parameter missing. Format https://url/id
            </Block>
          )}
        />
      </Switch>
    </ThemeProvider>
  )
}
