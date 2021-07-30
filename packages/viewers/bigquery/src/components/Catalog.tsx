import * as React from 'react'
import { Block } from 'baseui/block'
import { Label } from '@dakan/ui'
import {useCatalog} from '../hooks/useCatalog'

const Catalog = ({ url, dataset_id}) => {
  const [data, loading, error] = useCatalog(url, dataset_id)
  const dataset_name = 'model.ereg_dbt.' + dataset_id.split('.')[2]

  if (!data) {
    return null
  }
  
  const node = data['nodes'][dataset_name]
  const rows = node['stats']

  return (
    <React.Fragment>
      {data && (
        <Block>
          <Label>Catalog</Label>
          <Block>
          {JSON.stringify({rows})}
          </Block>
          <Label>Node</Label>
          <Block>
          {JSON.stringify({node})}
          </Block>
        </Block>
      )
    }
    </React.Fragment>
  )
}
export default Catalog
