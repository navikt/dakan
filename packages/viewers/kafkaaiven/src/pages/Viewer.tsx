import * as React from 'react'
import { Block } from 'baseui/block'
import { Metrics } from '@dakan/metrics'
import { Header, LoadingSpinner } from '@dakan/ui'
import { useNode } from '@dakan/hooks'

import TopicNotFound from '../components/TopicNotFound'
import Content from '../components/Content'
import exampleJson from '../resources/example.json'



const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )

  const getHeader = () => (
    <Header
      config={{
        nav: true,
        about: true,
      }}
    />
  )

  if (props.match.params.id === 'test') {
    return (
      <Block>
        {getHeader()}
        <Content
          {...props}
          data={exampleJson}
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
    return <TopicNotFound error={errorMessage} />
  }

  return (
    <React.Fragment>
      {getHeader()}
      {node && node.properties && (
        <Block>
          <Metrics viewer={'kafkaaiven'} page={node.id} section={''} />
          <Content
            data={node}
          />
        </Block>
      )}
    </React.Fragment>
  )
}

export default Viewer
