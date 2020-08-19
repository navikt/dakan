import * as React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import env from '@beam-australia/react-env'
import { CatalogHeader, localeOverrideNo as navLocaleOverride} from '@dakan/ui'
import { ThemeProvider, navTheme} from '@dakan/theme'
// eslint-disable-next-line no-unused-vars
import {LocaleProvider} from 'baseui';
import ListPage from './pages/ListPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import DummyViewer from './pages/DummyViewer'
import PageNotFound from './pages/PageNotFound'

const localeOverrideNo = navLocaleOverride || {
  pagination: {
    next: 'Neste',
    prev: 'Forrige',
    preposition: '',
  },
};

const title = env('TITLE') || 'Data'
const link = env('SEARCH_APP') || '../'
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

class Main extends React.Component {
  render() {
    const { history } = this.props

    return (
      <React.Fragment>
        <ThemeProvider theme={navTheme()}>
          <LocaleProvider locale={localeOverrideNo}>
            <Router history={history}>
              <CatalogHeader
                config={{
                  brand: title,
                  nav: true,
                  about: true,
                  aboutLink: 'https://data.nav.no/about',
                  link: link,
                  amplitude_project_id: amplitude_project_id,
                  amplitude_endpoint: amplitude_endpoint,
                  gt: gt,
                  viewer: 'datakatalog',
                  page: 'main',
                  section: 'main',
                  showLoginButton: false,
                }}
              />
              <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/list" component={ListPage} />
                <Route exact path="/search/:mode" component={SearchPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/viewer/:id" component={DummyViewer} />
                <Route component={PageNotFound} />
              </Switch>
            </Router>
          </LocaleProvider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Main
