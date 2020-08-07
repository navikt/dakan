import React from 'react'
import {Block} from 'baseui/block'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch } from '@dakan/hooks'

import exampleJson from '../resources/example.json'
import Content from '../components/Content'
import ErrorMessage from '../components/ErrorMessage'

const es_server = env('ES_SERVER')
const viewer_version = env('VIEWER_VERSION') || false
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(es_server, props.match.params.id)

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
        <Block>
        <Metrics
          gt={gt}
          amplitude_project_id={amplitude_project_id}
          amplitude_endpoint={amplitude_endpoint}
          viewer={'begrep'}
          page={data.content.term}
          section={''}
        />
        <Content
          {...props}
          indexEntry={data.content}
          viewerVersion={viewer_version}
        />
        </Block>
      )}
    </React.Fragment>
  )
}

export default Viewer
