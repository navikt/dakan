//import * as React from 'react'
import ReactDOM from 'react-dom'
//import Main from '../main'

it('Renders without crashing', () => {
  const div = document.createElement('div')
  /*   ReactDOM.render(
      <Main />,
    div,
  ) */
  ReactDOM.unmountComponentAtNode(div)
})
