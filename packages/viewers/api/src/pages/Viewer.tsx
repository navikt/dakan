import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode ] = useElasticSearch(
    props.match.params.id,
  )

  if (props.match.params.id === 'test') {
    return <Content {...props} item={exampleJson} />
  }

  return (
    <React.Fragment>
      {errorLoadingNode }
      {loadingNode && <LoadingSpinner />}
      {node && (
        <React.Fragment>
          <Metrics viewer={'apier'} page={node._id} section={''} />
          <Content {...props} id={props.match.params.id} item={node} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
