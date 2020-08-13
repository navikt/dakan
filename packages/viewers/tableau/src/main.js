import React from 'react'
import { Block } from 'baseui/block'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, navTheme, Header } from '@dakan/ui'
import env from '@beam-australia/react-env'

import Viewer from './pages/Viewer'

const title = env('TITLE') || 'Tableau'

export default function App() {
  return (
    <ThemeProvider theme={navTheme()}>
      <Switch>
        <Route exact path="/tableau/:id" component={Viewer} />
        <Header
          config={{
            brand: title,
            nav: true,
            about: true,
          }}
        />
        <Route
          component={() => (
            <Block>
              <Block display="flex" justifyContent="center">
                Viewer id parameter missing. Format https://url/id
              </Block>
            </Block>
          )}
        />
      </Switch>
    </ThemeProvider>
  )
}
