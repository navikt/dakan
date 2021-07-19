import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useNode } from '@dakan/hooks'
import { LoadingSpinner, ErrorPage } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import { Block } from 'baseui/block'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )

  if (props.match.params.id === 'test') {
    return <Content {...props} item={exampleJson} />
  }

  if (loadingNode) {
    return (
      <Block display="flex" justifyContent="center">
        <LoadingSpinner size={96} />
      </Block>
    );
  }

  if (
    (errorLoadingNode && !Object.keys(node).length) ||
    !Object.keys(node).length
  ) {
    return (
      <ErrorPage
        layout
        errorMessage={
          errorMessage ? errorMessage : 'Status 204 - No content found'
        }
      />
    )
  }

  return (
    <React.Fragment>
      {node && (
        <React.Fragment>
          <Metrics page={node.id} section={''} />
          <Content {...props} id={props.match.params.id} item={node} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
