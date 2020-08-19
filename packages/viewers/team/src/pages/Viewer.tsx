import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useNode, useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'


/* const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(props.match.params.id)
  const [page, setPage] = React.useState('')

  React.useEffect(() => {
    if (data !== undefined) {
      setPage(data.content.team)
    }
  }, [data])

  if (props.match.params.id === 'test') {
    return <Content {...props} item={exampleJson._source.content} />
  }

  return (
    <React.Fragment>
      {error}
      {data && data.content && (
        <React.Fragment>
          <Metrics viewer={'team'} page={page} section={''} />
          <Content {...props} item={data.content} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer */

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )
  const [members, loadingMembers, errorLoadingMembers] = useNodeEdges(
    props.match.params.id,
    'memberOfTeam',
  )

  if (props.match.params.id === 'test') {
    if (props.match.params.id === 'test') {
      return <Content {...props} item={exampleJson._source.content} />
    }
  }

  return (
    <React.Fragment>
      {errorLoadingNode && errorMessage}
      {loadingNode && <LoadingSpinner />}
      {node && (
        <React.Fragment>
          <Metrics viewer={'naisapp'} page={node.id} section={''} />
          <Content
            {...props}
            id={props.match.params.id}
            item={node}
            members={members}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
