import * as React from 'react'
import { Block } from 'baseui/block'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

import { useDbtCatalog } from '../hooks/useDbtCatalog'

const DbtCatalog = ({ url, dataset_id }) => {
  const [data, loading, error] = useDbtCatalog(url, dataset_id)

  if (!data || !data['nodes']) {
    return null
  }

  const dataset_id_parts = dataset_id.split(/[\s.]+/)
  const dataset_name = dataset_id_parts[dataset_id_parts.length - 1]

  const node = data['nodes']['model.ereg_dbt.' + dataset_name]

  let num_bytes = ''
  if (node && node['stats']['has_stats']['value']) {
    //num_bytes += node['stats']['num_bytes']['description']
    //num_bytes += ` (${node['stats']['num_bytes']['label']})`
    num_bytes += `Størrelse i bytes: ${node['stats']['num_bytes']['value']}`
  }

  let num_rows = ''
  if (node && node['stats']['has_stats']['value']) {
    //num_rows += node['stats']['num_rows']['description']
    //num_rows += ` (${node['stats']['num_rows']['label']})`
    num_rows += `Antall rader: ${node['stats']['num_rows']['value']}`
  }

  const Schema = () => {
    if (node && node['columns']) {
      const columns = node['columns']
      if (typeof columns !== 'object') {
        return null
      }
      let content: any[] = []
      Object.keys(columns).forEach((key) => {
        const col = columns[key]
        content.push([col.type, col.name, col.comment])
      })
      return <Table columns={['Type', 'Navn', 'Kommentar']} data={content} />
    }
    return null
  }

  return (
    <React.Fragment>
      {data && (
        <Block>
          <Label>Stats</Label>
          <Block marginTop="scale800">{num_rows}</Block>
          <Block>{num_bytes}</Block>
          <Block marginTop="scale1200">
            <Label>Skjema</Label>
            <Block marginTop="scale800">
              <Schema />
            </Block>
          </Block>
        </Block>
      )}
    </React.Fragment>
  )
}
export default DbtCatalog
