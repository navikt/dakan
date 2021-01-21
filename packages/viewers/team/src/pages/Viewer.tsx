import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useNode, useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleTeam from '../resources/exampleTeam.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )
  const [members, loadingMembers, errorLoadingMembers] = useNodeEdges(
    props.match.params.id,
    'hasTeamMember',
  )

  if (props.match.params.id === 'test') {
    if (props.match.params.id === 'test') {
      return <Content {...props} item={exampleJson} members={exampleTeam}/>
    }
  }

  return (
    <React.Fragment>
      {errorLoadingNode && errorMessage}
      {loadingNode && <LoadingSpinner />}
      {node && (
        <React.Fragment>
          <Metrics page={node.id} section={''} />
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
