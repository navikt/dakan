import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, Header, navTheme } from '@dakan/ui'
import Viewer from './pages/Viewer'
import env from '@beam-australia/react-env'
import { Block } from 'baseui/block'

const title = env('TITLE') || 'Data'

export default function App() {
  return (
    <ThemeProvider theme={navTheme()}>
      <Header
        config={{
          brand: title,
          nav: true,
          about: true
        }}
      />
      <Switch>
        <Route exact path="/begrep/:id" component={Viewer} />
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
