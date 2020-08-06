import React from 'react'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch, useNodeEdges } from '@dakan/hooks'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleMembers from '../resources/members.json'

const server = env('SERVER')
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(server, props.match.params.id)
  const [members, loadingMembers, errorLoadingMembers] = useNodeEdges(server, props.match.params.id, 'hasMember')
  const [page, setPage] = React.useState('')

  React.useEffect(() => {
    if (data && data.content && data.content.id) {
      setPage(data.content.person)
    }
  }, [data])

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
            page={page}
            section={''}
          />
          <Content {...props} item={data.content} members={members} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
