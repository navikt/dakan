import * as React from 'react'
import { Block } from 'baseui/block'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

const CosmosCatalog = ({ node }) => {
  const [stats, setStats] = React.useState<JSX.Element | null>()
  const [schema, setSchema] = React.useState<JSX.Element | null>()

  React.useEffect(() => {
    const metadata = node.properties?.dbt?.metadata ? node.properties.dbt.metadata : {}

    if (metadata['columns']) {
      const columns = metadata['columns']
      if (typeof columns === 'object') {
        let content: any[] = []
        Object.keys(columns).forEach((key) => {
          const col = columns[key]
          content.push([col.type, col.name, col.comment])
        })
        setSchema(
          <Table columns={['Type', 'Navn', 'Kommentar']} data={content} />,
        )
      }
    }

    if (metadata['stats']) {
      let num_bytes = ''
      if (metadata['stats']['has_stats']['value']) {
        num_bytes = `Størrelse i bytes: ${metadata['stats']['num_bytes']['value']}`
      }

      let num_rows = ''
      if (metadata['stats']['has_stats']['value']) {
        num_rows += `Antall rader: ${metadata['stats']['num_rows']['value']}`
      }

      if (num_bytes && num_rows) {
        setStats(
          <Block>
            <Block>{num_rows}</Block>
            <Block>{num_bytes}</Block>
          </Block>,
        )
      }
    }
  }, [node])

  return (
    <React.Fragment>
      {node && (
        <Block>
          <Label>Stats</Label>
          {stats}
          <Block marginTop="scale1200">
            <Label>Skjema</Label>
            {schema}
          </Block>
        </Block>
      )}
    </React.Fragment>
  )
}
export default CosmosCatalog
