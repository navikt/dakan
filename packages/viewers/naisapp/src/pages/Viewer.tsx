import React from 'react'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch, useNodeEdges } from '@dakan/hooks'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleMembers from '../resources/members.json'
import exampleMemberOf from '../resources/memberOf.json'

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(props.match.params.id)
  const [memberOf, loadingMemberOf, errorLoadingMemberOf] = useNodeEdges(
    props.match.params.id,
    'memberOf',
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
      {error}
      {data && data.content && (
        <React.Fragment>
          <Metrics viewer={'naisapp'} page={data.content.id} section={''} />
          <Content {...props} item={data.content} memberOf={memberOf} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
