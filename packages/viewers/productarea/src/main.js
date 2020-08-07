import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, Header, navTheme } from '@dakan/ui'
import Viewer from './pages/Viewer'
import env from '@beam-australia/react-env'
import { Block } from 'baseui/block'

const title = env('TITLE') || 'productarea'
const link = env('HOME_URL') || 'https://data.nav.no/about'
const about = env('ABOUT_URL') || 'https://data.nav.no/about'

export default function App() {
  return (
    <ThemeProvider theme={navTheme()}>
      <Header
        config={{
          brand: title,
          nav: true,
          about: true,
          aboutLink: about,
          link: link,
        }}
      />
      <Switch>
        <Route exact path="/productarea/:id" component={Viewer} />
        <Route
          component={() => (
            <Block display="flex" justifyContent="center">
              Viewer id parameter missing. Format https://url/id
            </Block>
          )}
        />
      </Switch>
    </ThemeProvider>
  )
}
