import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, Header, navTheme } from '@dakan/ui'
import env from '@beam-australia/react-env'
import { Block } from 'baseui/block'
import Viewer from './pages/Viewer'

const link = env('HOME_URL') || '../'

export default function App() {
  return (
    <ThemeProvider theme={navTheme()}>
      <Switch>
        <Route exact path="/kafka/:id" component={Viewer} />
        <Header
          config={{
            nav: true,
            about: true,
          }}
        />
        <Route
          component={() => (
            <Block display="flex" justifyContent="center">
              Kafka viewer id parameter missing. Format {link}/kafka/id
            </Block>
          )}
        />
      </Switch>
    </ThemeProvider>
  )
}
