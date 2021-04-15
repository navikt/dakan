import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'

import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

import { Members } from './Members'

const ITEMS = [
  { item: 'slack', label: 'Slack', format: 'slackchannel' },
  { item: 'created', label: 'Opprettet', format: 'date' },
  { item: 'modified', label: 'Oppdatert', format: 'date' },
  { item: 'group_id', label: 'Gruppe', format: 'ad_group' },
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

  const Head = () => (
    <div role="main">
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />
    </div>
  )

  const Parts = () => {
    if (item) {
      return (
        <Block width="100%" marginBottom="scale1200">
          <div role="complementary">
            <Block marginBottom="scale1200">
              <LabelMedium>Applikasjoner</LabelMedium>
              {members && typeof members == 'object' && getTable()}
            </Block>
            <Block width="100%" marginBottom="scale1200">
              <LabelMedium>Personer</LabelMedium>
              <Members id={item.id} />
            </Block>
          </div>
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
          right={<Parts />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
