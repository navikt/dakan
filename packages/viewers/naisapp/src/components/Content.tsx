import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'

import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

const ITEMS = [
  { item: 'slack', label: 'Slack' },
  { item: 'created', label: 'Opprettet', format: 'date' },
  { item: 'modified', label: 'Oppdatert', format: 'date' },
]

const getLink = (row) => {
  return '../naisteam/' + row.id
}

const getTable = (list) => {
  if (typeof list == 'undefined' || list == null || list.length == null) {
    return null
  }

  let rows: any = []
  list.map((item) => {
    const row: any = {}
    row['id'] = item['id']
    const data: any = {
      id: item['id'],
      name: item['properties']['name'],
      type: item['properties']['cluster'],
    }
    row['data'] = data
    rows.push(row)
  })

  const columns: any[] = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="id" header="Id">
      {(row) => row.data.id}
    </TableBuilderColumn>,
    <TableBuilderColumn id="cluster" header="Cluster">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]

  return <TableBuilder data={rows}>{columns}</TableBuilder>
}

const Content = ({ item, memberOf }) => {
  
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
          <LabelMedium>Tilhører</LabelMedium>
          {getTable(memberOf)}
        </Block>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Nais applikasjon"
          headingText={item && item.properties && item.properties.name}
          left={<Head />}
          right={<Members />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
