import React from 'react'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'

import { useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner, isEmpty } from '@dakan/ui'
import { Label } from '@dakan/ui'

const getLink = (row) => {
  return '../naisteam/' + row.id
}

export const NaisTeam = ({ id }: any) => {
  const [nodes, loadingNodes, errorLoadingNodes] = useNodeEdges(
    id,
    'memberOfNaisTeam',
  )

  const columns: any[] = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="description" header="Beskrivelse">
      {(row) => row.data.description}
    </TableBuilderColumn>,
  ]

  const getTable = (nodes) => {
    let rows: any = []
    if (nodes && Array.isArray(nodes)) {
      nodes.map((node) => {
        const row: any = {}
        row['id'] = node['id']
        const data: any = {
          id: node['id'],
          name: node['properties']['name'],
          description: node['properties']['description'],
        }
        row['data'] = data
        rows.push(row)
      })
      return <TableBuilder data={rows}>{columns}</TableBuilder>
    }
    return null
  }

  return (
    <React.Fragment>
      {errorLoadingNodes && 'Error loading nais teams'}
      {loadingNodes && <LoadingSpinner />}
      {nodes && (
        <React.Fragment>
          <Label>NAIS Team (deploy team)</Label>
          {getTable(nodes)}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default NaisTeam
