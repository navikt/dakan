import * as React from 'react'
import axios from 'axios'

import { Block } from 'baseui/block'

import env from '@beam-australia/react-env'

const server = env('ELASTIC_ENDPOINT')
const index = env('ELASTIC_INDEX')

const DummyViewer = props => {
  const [data, setData] = React.useState({ _id: null, _source: {} })
  const [error, setError] = React.useState(null)

  const handleAxiosError = error => {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else {
      setError(error.message)
    }
  }

  const handleGetIndexResponse = response => {
    if (typeof response.data === 'object' && response.data !== null) {
      setData(response.data)
    } else {
      setError(response.data)
    }
  }

  React.useEffect(() => {
    axios
      .get(`${server}/${index}/${props.match.params.id}`)
      .then(handleGetIndexResponse)
      .catch(handleAxiosError)
  }, [props])

  return (
    <Block margin="scale1000">
      {data._id && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </Block>
  )
}

export default DummyViewer