import React from 'react'
import { Metrics } from '@dakan/metrics'
import { useNode, useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleMembers from '../resources/members.json'
import exampleMemberOf from '../resources/memberOf.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )
  const [memberOf, loadingMemberOf, errorLoadingMemberOf] = useNodeEdges(
    props.match.params.id,
    'hasNaisAppOwner',
  )

  if (props.match.params.id === 'test') {
    return (
      <Content
        {...props}
        item={exampleJson._source.content}
        members={exampleMembers}
        memberOf={exampleMemberOf}
      />
    )
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
            memberOf={memberOf}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
