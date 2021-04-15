import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch } from '@dakan/hooks'
import { LoadingSpinner, ErrorPage } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode] = useElasticSearch(
    props.match.params.id,
  )

  if (props.match.params.id === 'test') {
    return <Content {...props} id={exampleJson.id} item={exampleJson} />
  }

  if (errorLoadingNode && !node) {
    return <ErrorPage layout errorMessage={'Status 204 - No content found'} />
  }

  return (
    <React.Fragment>
      {loadingNode && <LoadingSpinner />}
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
