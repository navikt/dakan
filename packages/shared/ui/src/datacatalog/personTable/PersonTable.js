import * as React from 'react'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { Avatar } from 'baseui/avatar'
import { Block } from 'baseui/block'
import { StyledLink as Link } from 'baseui/link'

const getLink = (row) => {
  return '../person/' + row.id
}

const getPerson = (row) => {
  if (row && row.data) {
    return (
      <Block
        key={row.id}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Avatar
          src={row.data.profilbilde}
          name={row.data.name}
          size="scale800"
        />
        <Block marginLeft="scale400">{row.data.name}</Block>
      </Block>
    )
  }
  return null
}

export const PersonTable = ({ members }) => {
  const columns = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{getPerson(row)}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="type" header="Ansatt">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]

  const getTable = () => {
    let rows = []
    if (members && Array.isArray(members)) {
      members.map((member) => {
        const name =
          member['properties']['fornavn'] +
          ' ' +
          member['properties']['etternavn']
        const row = {}
        row['id'] = member['id']
        const data = {
          id: member['properties']['navident'],
          name: name,
          type: member['properties']['ressurstype'],
          profilbilde: member['properties']['profilbilde'],
        }
        row['data'] = data
        rows.push(row)
      })
      return <TableBuilder data={rows}>{columns}</TableBuilder>
    } else {
      return null
    }
  }
  return getTable()
}

export default PersonTable
