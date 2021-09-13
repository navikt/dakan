import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'
import { LayoutSplit as Layout, ContentItems, LabeledContent } from '@dakan/ui'
import removeMd from 'remove-markdown'

import Heatmap from '../components/Heatmap'
import RepoContributers from './RepoContributers'

const ITEMS = [
  { item: 'slack', label: 'Slack', format: 'slackchannel' },
  { item: 'created', label: 'Opprettet', format: 'date' },
  { item: 'modified', label: 'Oppdatert', format: 'date' },
  { item: 'repo', label: 'Github repo', format: 'link' },
  { item: 'repo_description', label: 'Github repo beskrivelse' },
  { item: 'commit_count', label: 'Total commits' },
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
      description: item['properties']['description'],
    }
    row['data'] = data
    rows.push(row)
  })

  const columns: any[] = [
    <TableBuilderColumn key="table_name" id="name" header="Team">
      {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
    </TableBuilderColumn>,
    <TableBuilderColumn
      key="table_description"
      id="description"
      header="Beskrivelse"
    >
      {(row) => row.data.description}
    </TableBuilderColumn>,
  ]

  return <TableBuilder data={rows}>{columns}</TableBuilder>
}

const Content = ({ item, memberOf }) => {

  const getReadMe = () : String => {
    const content: String = removeMd(item.properties.read_me_content || '')

    if (content.length > 200) {
      return content.substr(0, 200) + '...'
    } else {
      return content
    }

  }

  const Head = () => (
    <div role="main">
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />

      {item && item.properties && item.properties.daily_commit_frequency && (
        <LabeledContent description="Commit historikk" list>
          <Heatmap data={item.properties.daily_commit_frequency} />
        </LabeledContent>
      )}

      {item && item.properties && item.properties.read_me_content && (
        <LabeledContent description="Repo readme" list>
          {getReadMe()}
          <Link href={item.properties.read_me_url}>les mer</Link>
        </LabeledContent>
      )}

      {/* 
      {item && item.properties && item.properties.latest_commiters && (
        <RepoContributers tableData={item.properties.latest_commiters} />
      )}
*/}
    </div>
  )

  const Members = () => {
    if (item) {
      return (
        <Block width="100%" marginBottom="scale1200">
          <div role="complementary">
            <LabelMedium>Tilhører team</LabelMedium>
            {getTable(memberOf)}
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
