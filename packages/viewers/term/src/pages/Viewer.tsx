import React from 'react'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch } from '@dakan/hooks'

import exampleJson from '../resources/example.json'
import Content from '../components/Content'
import ErrorMessage from '../components/ErrorMessage'

const server = env('SERVER')
const viewer_version = env('VIEWER_VERSION') || false
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(server, props.match.params.id)
  const [page, setPage] = React.useState('')

  React.useEffect(() => {
    if (data !== undefined) {
      setPage(data.content.term)
    }
  }, [data])

  if (props.match.params.id === 'test') {
    return (
      <Content
        {...props}
        indexEntry={exampleJson._source.content}
        viewerVersion={viewer_version}
      />
    )
  }

  console.log(error)
  if (error) {
    return <ErrorMessage />
  }

  return (
    <React.Fragment>
      {data && data.content && (
        <Metrics
          gt={gt}
          amplitude_project_id={amplitude_project_id}
          amplitude_endpoint={amplitude_endpoint}
          viewer={'begrep'}
          page={page}
          section={''}
        />
      )}
      {data && data.content && (
        <Content
          {...props}
          indexEntry={data.content}
          viewerVersion={viewer_version}
        />
      )}
    </React.Fragment>
  )
}

export default Viewer
