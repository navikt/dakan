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
  return '../naisapp/' + row.id
}

const Content = ({ item, members }) => {
  const columns: any[] = [
    <TableBuilderColumn id="name" header="Navn">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn id="sone" header="Sone">
      {(row) => row.data.zone}
    </TableBuilderColumn>,
    <TableBuilderColumn id="cluster" header="Cluster">
      {(row) => row.data.type}
    </TableBuilderColumn>,
  ]

  const getTable = () => {
    let rows: any = []
    members.map((member) => {
      const row: any = {}
      row['id'] = member['id']
      const data: any = {
        id: member['id'],
        zone: member['properties']['zone'],
        name: member['properties']['name'],
        type: member['properties']['cluster'],
      }
      row['data'] = data
      rows.push(row)
    })

    return <TableBuilder data={rows}>{columns}</TableBuilder>
  }

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
          <LabelMedium>Applikasjoner</LabelMedium>
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
          headingLabel="Nais team"
          headingText={item && item.properties && item.properties.name}
          left={<Head />}
          right={<Members />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
