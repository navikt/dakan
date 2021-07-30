import * as React from 'react'
import { Block } from 'baseui/block'
import { Label } from '@dakan/ui'
import { useLineage } from '../hooks/useLineage'
import { string } from 'prop-types'

const Lineage = ({ url, dataset_id }) => {
  const [data, loading, error] = useLineage(url, dataset_id)

  return (
    <React.Fragment>
      {data && (
        <Block>
          <Label>Lineage</Label>
          <div>TODO: draw graphs:</div>
          {JSON.stringify(data['parent_map'])}
          {JSON.stringify(data['child_map'])}
        </Block>
      )}
    </React.Fragment>
  )
}
export default Lineage
