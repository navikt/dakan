import React from 'react'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { useElasticSearch } from '@dakan/hooks'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'

const Viewer = (props: any) => {
  const [data, loading, error] = useElasticSearch(props.match.params.id)
  const [page, setPage] = React.useState('')

  React.useEffect(() => {
    if (data !== undefined) {
      setPage(data.content.productarea)
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
          <Metrics viewer={'productarea'} page={page} section={''} />
          <Content {...props} item={data.content} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
