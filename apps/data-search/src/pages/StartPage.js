import React from 'react'
import SearchPage from './SearchPage'
import ListPage from './ListPage'
import env from '@beam-australia/react-env'

const search_mode = env('SEARCH_MODE')

export const StartPage = (props, state) => {
  const mode = props.match.params.mode || search_mode
  if (mode === 'list') {
    return <ListPage {...props} {...state} />
  }
  return <SearchPage {...props} {...state} />
}

export default StartPage
