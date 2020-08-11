import * as React from 'react'
import { Block } from 'baseui/block'
import { Metrics } from '@dakan/metrics'
import { Header, LoadingSpinner } from '@dakan/ui'
import { useNode, useNodeEdges, useContent } from '@dakan/hooks'

import Content from '../components/Content'
import TopicNotFound from '../components/TopicNotFound'

import exampleKafkaJson from '../resources/exampleKafka.json'
import exampleTopicFieldJson from '../resources/exampleTopicField.json'
import exampleTags from '../resources/exampleTags.json'
import exampleComments from '../resources/exampleComments.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(props.match.params.id)
  const [fields, loadingFields, errorLoadingFields] = useNodeEdges(props.match.params.id, 'hasMember')
  const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent('opplysningstype')
  const [comments, loadingCommnets, errorLoadingComments, setComments] = useNodeEdges(props.match.params.id, 'hasComment')

  const getHeader = () => (
    <Header
      config={{
        nav: true,
        about: true,
        showLoginButton: true
      }}
    />
  )

  if (props.match.params.id === 'test') {
    return (
      <Block>
        {getHeader()}
        <Content
          {...props}
          data={exampleKafkaJson}
          fields={exampleTopicFieldJson}
          tagOptions={exampleTags}
          numberOfFields={exampleTopicFieldJson.length}
          comments={exampleComments}
          setComments={setComments}
        />
      </Block>
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

  if (loadingNode) {
    return (
      <Block display="flex" justifyContent="center">
        <LoadingSpinner size={96} />
      </Block>
    )
  }

  if (errorLoadingNode && !Object.keys(node).length) {
    return <TopicNotFound error={errorMessage} />
  }

  console.log("test")

  return (
    <React.Fragment>
      {getHeader()}
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
          />
        </Block>
      )
      }
    </React.Fragment>
  )
}

export default Viewer
