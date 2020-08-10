import React from 'react'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch, useNodeEdges } from '@dakan/hooks'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleMembers from '../resources/members.json'

const es_server = env('ES_SERVER')
const graph_server = env('GRAPH_SERVER')
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(es_server, props.match.params.id)
  const [members, loadingMembers, errorLoadingMembers] = useNodeEdges(graph_server, props.match.params.id, 'hasMember')

  if (props.match.params.id === 'test') {
    return (
      <Content
        {...props}
        item={exampleJson._source.content}
        members={exampleMembers}
      />
    )
  }

  return (
    <React.Fragment>
      {error}
      {data && data.content && (
        <React.Fragment>
          <Metrics
            gt={gt}
            amplitude_project_id={amplitude_project_id}
            amplitude_endpoint={amplitude_endpoint}
            viewer={'naisteam'}
            page={data.content.id}
            section={''}
          />
          <Content {...props} item={data.content} members={members} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
