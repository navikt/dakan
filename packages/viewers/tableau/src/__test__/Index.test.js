import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from '../main'

it('Renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
