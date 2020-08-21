import React from 'react'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'
import { useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'
import { Label } from '@dakan/ui'

const getLink = (row) => {
  return '../team/' + row.id
}

export const Resources = ({ id }: any) => {
  const [members, loadingMembers, errorLoadingMembers] = useNodeEdges(
    id,
    'memberOfProductArea',
  )

  const columns: any[] = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="id" header="Ident">
      {(row) => row.data.id}
    </TableBuilderColumn>,
    <TableBuilderColumn id="roles" header="Rolle">
      {(row) => row.data.roles}
    </TableBuilderColumn>,
    <TableBuilderColumn id="type" header="Ansatt">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]

  const getTable = (members) => {
    let rows: any = []
    if (members && Array.isArray(members)) {
      members.map((member) => {
        const name =
          member['properties']['fornavn'] +
          ' ' +
          member['properties']['etternavn']
        const row: any = {}
        row['id'] = member['id']
        const data: any = {
          id: member['properties']['navident'],
          name: name,
          type: member['properties']['ressurstype'],
          //type: member['resource']['resourceType'],
        }
        row['data'] = data
        rows.push(row)
      })
      return <TableBuilder data={rows}>{columns}</TableBuilder>
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      {errorLoadingMembers && 'Error loading members'}
      {loadingMembers && <LoadingSpinner />}
      {members && (
        <React.Fragment>
          <Label>Personer tilknyttet området</Label>
          {getTable(members)}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Resources
