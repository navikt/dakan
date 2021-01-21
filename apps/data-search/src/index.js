import * as React from 'react'
import * as ReactDOM from 'react-dom'
import axe from '@axe-core/react'
import Main from './main'
import { createBrowserHistory } from 'history'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000, {});
}

ReactDOM.render(
  <Main history={createBrowserHistory()} />,
  document.getElementById('root'),
)
