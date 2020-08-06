import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'
import GetValue from '../utils/GetValue'

import { LayoutSplit as Layout, LabeledContent } from '@dakan/ui'

const ITEMS = [
  { item: 'slack', label: 'Slack' },
  { item: 'created', label: 'Opprettet', format: 'date' },
  { item: 'modified', label: 'Oppdatert', format: 'date' },
]

const getLink = (row) => {
  return '../naisteam/' + row.id
}

const getTable = (list) => {
  if (
    typeof list == 'undefined' ||
    list == null ||
    list.length == null
  ) {
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

  const getItems = (items: Array<{}>, content) => {
    return items.map((entry: any, i: number) => {
      let value = GetValue(() => content.properties[entry.item])
      if (entry.format && entry.format === 'date') {
        const date = new Date(value)
        if (typeof date.getMonth === 'function') {
          value = format(date, 'yyyy-MM-dd')
        }
      }

      return (
        <FlexGridItem key={`item_${i}`}>
          <LabeledContent description={entry.label} list>
            {value}
          </LabeledContent>
          <Block width="scale1000" />
        </FlexGridItem>
      )
    })
  }

  const Content = () => {
    if (item) {
      return (
        <FlexGrid flexGridColumnCount={[1]}>{getItems(ITEMS, item)}</FlexGrid>
      )
    }
    return null
  }

  const Head = () => (
    <Block>
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <Content />
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
