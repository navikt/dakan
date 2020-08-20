import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'

import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

const ITEMS = [
  { item: 'slackChannel', label: 'Slack', format: 'slackchannel' },
  { item: 'lastChanged', label: 'Oppdatert', format: 'date' },
]

const getLink = (row) => {
  return '../person/' + row.id
}

const Content = ({ item, members }) => {
  const columns: any[] = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="roles" header="Rolle">
      {(row) => row.data.roles}
    </TableBuilderColumn>,
    <TableBuilderColumn id="type" header="Ansatt">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]

  const getTable = () => {
    let rows: any = []
    if (members) {
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
      return JSON.stringify(members)
    }
  }

  const Head = () => (
    <Block>
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />
    </Block>
  )

  const Members = () => {
    if (item) {
      return (
        <Block width="100%" marginBottom="scale1200">
          <LabelMedium>Ansatte</LabelMedium>
          {members && typeof members == 'object' && getTable()}
        </Block>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Kontor"
          headingText={item && item.properties && item.properties.name}
          left={<Head />}
          right={<Members />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
