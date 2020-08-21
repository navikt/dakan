import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic'
import { StyledLink as Link } from 'baseui/link'

import { LayoutSplit as Layout, ContentItems, PersonTable } from '@dakan/ui'

const ITEMS = [
  { item: 'slackChannel', label: 'Slack', format: 'slackchannel' },
  { item: 'teamType', label: 'Type team' },
  { item: 'tags', label: 'Tags', format: 'list' },
  { item: 'naisTeams', label: 'NAIS teams', format: 'list' },
  { item: 'lastChanged', label: 'Oppdatert', format: 'date' },
]

const getLink = (row) => {
  return '../person/' + row.id
}

const Content = ({ item, members }) => {
  

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
          {members && typeof members == 'object' && <PersonTable members={members} />}
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
