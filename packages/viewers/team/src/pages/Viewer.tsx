import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useNode, useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'

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
          <Metrics viewer={'orgteam'} page={node.id} section={''} />
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
