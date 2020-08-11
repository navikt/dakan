import React from 'react'
import axios from 'axios'
import env from '@beam-australia/react-env'
import { Block } from 'baseui/block'
import Cookies from 'js-cookie'
import { Spinner } from 'baseui/spinner'
import { Metrics } from '@dakan/metrics'

import exampleKafkaJson from '../resources/exampleKafka.json'
import exampleTopicFieldJson from '../resources/exampleTopicField.json'
import exampleTags from '../resources/exampleTags.json'
import Content from '../components/Content'
import HandleAxiosError from '../utils/HandleAxiosError'
import exampleComments from '../resources/exampleComments.json'
import TopicNotFound from '../components/TopicNotFound'

import { useNode, useNodeEdges, useContent } from '@dakan/hooks'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode] = useNode(props.match.params.id)
  const [fields, loadingFields, errorLoadingFields] = useNodeEdges(props.match.params.id, 'hasMember')
  const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent('opplysningstype')
  const [comments, loadingCommnets, errorLoadingComments, setComments] = useNodeEdges(props.match.params.id, 'hasComment')

  const [showSpinner, setShowSpinner] = React.useState(false)
  const [clientUser, setClientUser] = React.useState({})


  if (props.match.params.id === 'test') {
    return (
      <Content
        {...props}
        data={exampleKafkaJson}
        fields={exampleTopicFieldJson}
        tagOptions={exampleTags }
        numberOfFields={exampleTopicFieldJson.length}
        comments={exampleComments}
        setComments={setComments}
        clientUser={clientUser}
      />
    )
  }

  const sortNodesByPropertyTime = (data) => {
      return data.sort((a, b) => {
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
  }

/*   const handleGetTopicFields = (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setFields(response.data)
      setNumberOfFields(response.data.length)
      setShowSpinner(false)
    } else {
      setError(response)
      setShowSpinner(false)
    }
  } */

  /* const handleResponse = (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setData(response.data)
      if (response.data.id) {
        axios
          .get(`${graph_server}/node/out/${response.data.id}/hasMember`)
          //.then(handleGetTopicFields)
          .catch((e) => HandleAxiosError(e, setError))

        axios
          .get(`${graph_server}/node/out/${response.data.id}/hasComment`)
          .then(handleGetCommentsResponse)
          .catch((e) => HandleAxiosError(e, setError))
      }
    } else {
      setError(response)
    }
  }

  const handleGetInformationTypeResponse = async (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setTagOptions(response.data)
    } else {
      setError(response)
    }
  }




  if (showSpinner) {
    return (
      <Block display="flex" justifyContent="center">
        <Spinner size={96} />
      </Block>
    )
  }
/* 
  if (error && !Object.keys(fields).length) {
    return <TopicNotFound error={error} />
  } */

  const getAzureAuth = () => {
    const tokenId = Cookies.get('ClientToken')
    const clientUser = Cookies.get('ClientUser')
    if (tokenId && clientUser) {
      setClientUser(
        JSON.parse(clientUser.replace(/\\054/g, ',').replace(/\\"/g, '"')),
      )
    }
  }

  return (
    <React.Fragment>
     {loadingNode}
     {errorLoadingNode}
     {node && node.properties && (
        <Block>
          <Metrics
            viewer={'kafka'}
            page={node.id}
            section={''}
          />
          <Content
            data={node}
            fields={fields}
            tagOptions={tagOptions}
            numberOfFields={fields && fields.length}
            comments={comments && comments.length > 0 && sortNodesByPropertyTime(comments)}
            setComments={setComments}
            clientUser={clientUser}
          />
        </Block>
      )}
    </React.Fragment>
  )
}

export default Viewer
