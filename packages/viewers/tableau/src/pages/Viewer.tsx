import * as React from 'react'
import axios from 'axios'
import { Block } from 'baseui/block'
import { Spinner } from 'baseui/spinner'
import env from '@beam-australia/react-env'
import amplitude from 'amplitude-js'
import Cookies from 'js-cookie'

import { Metrics } from '@dakan/metrics'
import HandleAxiosError from '../utils/HandleAxiosError'
import exampleJson from '../resources/example.json'
import exampleTableauViewsJson from '../resources/exampleTableuViews.json'
import ErrorViewer from '../components/ErrorViewer'
import Content from '../components/Content'
import exampleComments from '../resources/exampleComments.json'
import exampleTags from '../resources/exampleTags.json'

const graph_server = env('GRAPH_SERVER')

const Viewer = (props: any) => {
  const [data, setData] = React.useState<any>()
  const [viewList, setViewList] = React.useState([{}])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [tagOptions, setTagOptions] = React.useState([{}])
  const [clientUser, setClientUser] = React.useState({})
  const [comments, setComments] = React.useState([{}])

  const { id } = props.match.params

  const handleGetCommentsResponse = (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      const commentList = [...response.data].sort((a, b) => {
        if (
          a.properties.date + 't' + a.properties.time <
          b.properties.date + 't' + b.properties.time
        ) {
          return 1
        }
        if (
          a.properties.date + 't' + a.properties.time >
          b.properties.date + 't' + b.properties.time
        ) {
          return -1
        }
        return 0
      })
      setComments(commentList)
    } else {
      setError(response)
    }
  }

  const handleGetEdgesResponse = (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setViewList(response.data)
    } else {
      setError(response)
    }
  }

  const handleGetIndexResponse = (response: any) => {
    if (typeof response === 'object' && response !== null) {
      setData(response)
      if (response.id) {
        axios
          .get(`${graph_server}/node/out/${id}/hasMember`)
          .then(handleGetEdgesResponse)
          .catch((e) => HandleAxiosError(e, setError))

        axios
          .get(`${graph_server}/node/out/${id}/hasComment`)
          .then(handleGetCommentsResponse)
          .catch((e) => HandleAxiosError(e, setError))
      }
      const eventProperty = {
        viewer: 'tableau',
        page: response.data.properties.topic_name,
      }
      amplitude.getInstance().logEvent('page_visit', eventProperty)
    } else {
      setError(response)
    }
    setLoading(false)
  }

  const handleGetInformationTypeResponse = async (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setTagOptions(response.data)
    } else {
      setError(response)
    }
  }

  const getAzureAuth = () => {
    const tokenId = Cookies.get('ClientToken')
    const clientUser = Cookies.get('ClientUser')
    if (tokenId && clientUser) {
      setClientUser(
        JSON.parse(clientUser.replace(/\\054/g, ',').replace(/\\"/g, '"')),
      )
    }
  }

  React.useEffect(() => {
    if (id === 'test' || id === 'test.test') {
      setData(exampleJson)
      setViewList(exampleTableauViewsJson)
      setLoading(false)
      setComments(exampleComments)
      setTagOptions(exampleTags)
    } else {
      axios
        .get(`${graph_server}/node/${id}`)
        .then((response: any) => handleGetIndexResponse(response.data))
        .catch((e: any) => {
          HandleAxiosError(e, setError)
          setLoading(false)
        })
      axios
        .get(`${graph_server}/nodes/opplysningstype`)
        .then(handleGetInformationTypeResponse)
        .catch((e) => HandleAxiosError(e, setError))
    }
    getAzureAuth()
  }, [id])

  if (loading) {
    return (
      <Block display="flex" justifyContent="center">
        <Spinner size={96} />
      </Block>
    )
  }

  if (error && !Object.keys(data).length) {
    return <ErrorViewer error={error} />
  }

  return (
    <React.Fragment>
      <Block>
        {data && (
          <React.Fragment>
            <Metrics
              viewer={'tableau'}
              page={data.id || 'ukjent'}
              section={''}
            />
            <Content
              data={data}
              viewList={viewList}
              tagOptions={tagOptions}
              comments={comments}
              setComments={setComments}
              clientUser={clientUser}
            />
          </React.Fragment>
        )}
      </Block>
    </React.Fragment>
  )
}
export default Viewer
