import React from 'react'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'
import { Block } from 'baseui/block'

import { useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner, isEmpty } from '@dakan/ui'
import { Label } from '@dakan/ui'

import exampleTeam from '../resources/exampleTeam.json'

const getLink = (row) => {
  return '../team/' + row.id
}

export const OrgTeam = ({ id }: any) => {
  const [nodes, loadingNodes, errorLoadingNodes] = useNodeEdges(id, 'hasTeam')
  
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
      nodes.forEach((node) => {
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
    return false
  }

  if (id === 'test') {

    return (
      <React.Fragment>
          <Block width="100%" marginBottom="scale1200">
            <Label>Org. team (Teamkatalogen)</Label>
            {getTable(exampleTeam)}
          </Block>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {errorLoadingNodes && 'Error loading nais teams'}
      {loadingNodes && <LoadingSpinner />}
      {nodes && (
        <Block width="100%" marginBottom="scale1200">
          <Label>Org. team (Teamkatalogen)</Label>
          {getTable(nodes)}
        </Block>
      )}
    </React.Fragment>
  )
}

export default OrgTeam
