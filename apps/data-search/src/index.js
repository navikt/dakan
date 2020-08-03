import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './main'
import { createBrowserHistory } from 'history'
import './index.css'

ReactDOM.render(
  <Main history={createBrowserHistory()} />,
  document.getElementById('root'),
)
