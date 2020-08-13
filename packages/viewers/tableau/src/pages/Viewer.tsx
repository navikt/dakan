import * as React from 'react'
import { Block } from 'baseui/block'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { Header, LoadingSpinner } from '@dakan/ui'
import { useNode, useNodeEdges, useContent } from '@dakan/hooks'

import exampleJson from '../resources/example.json'
import exampleTableauViewsJson from '../resources/exampleTableuViews.json'
import ErrorViewer from '../components/ErrorViewer'
import Content from '../components/Content'
import exampleComments from '../resources/exampleComments.json'
import exampleTags from '../resources/exampleTags.json'

const title = env('TITLE') || 'Tableau'

const Viewer = (props: any) => {

  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(props.match.params.id)
  const [viewList, loadingViewList, errorLoadingViewList] = useNodeEdges(props.match.params.id, 'hasMember')
  const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent('opplysningstype')
  const [comments, loadingCommnets, errorLoadingComments, setComments] = useNodeEdges(props.match.params.id, 'hasComment')

  const getHeader = () => (
    <Header
      config={{
        brand: title,
        nav: true,
        about: true,
        showLoginButton: true
      }}
    />
  )

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

  if (props.match.params.id === 'test') {
    return (
      <Block>
        {getHeader()}
        <Content
          {...props}
          data={exampleJson}
          viewList={exampleTableauViewsJson}
          tagOptions={exampleTags}
          comments={exampleComments}
          setComments={setComments}
        />
      </Block>
    )
  }

  if (loadingNode) {
    return (
      <Block display="flex" justifyContent="center">
        <LoadingSpinner size={96} />
      </Block>
    )
  }

  if (errorLoadingNode && !Object.keys(node).length) {
    return <ErrorViewer error={errorMessage} />
  }

  return (
    <React.Fragment>
      <Block>
        {getHeader()}
        {node && node.properties && (
          <React.Fragment>
            <Metrics
              viewer={'tableau'}
              page={node.id}
              section={''}
            />
            <Content
              data={node}
              viewList={viewList}
              tagOptions={tagOptions}
              comments={comments && comments.length > 0 && sortNodesByPropertyTime(comments)}
              setComments={setComments}
            />
          </React.Fragment>
        )}
      </Block>
    </React.Fragment>
  )
}
export default Viewer
