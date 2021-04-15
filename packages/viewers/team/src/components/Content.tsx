/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'

import { LayoutSplit as Layout, ContentItems, PersonTable } from '@dakan/ui'

const ITEMS = [
  { item: 'slackChannel', label: 'Slack', format: 'slackchannel' },
  { item: 'lastChanged', label: 'Oppdatert', format: 'date' },
]

const getLink = (row) => {
  return '../person/' + row.id
}

const Content = ({ item, members }) => {
  const Head = () => (
    <div role="main">
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />
    </div>
  )

  const Members = () => {
    if (members) {
      return (
        <Block width="100%" height="800px">
          <div role="complementary">
            <LabelMedium>Medlemmer av teamet</LabelMedium>
            <PersonTable members={members} />
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
          headingLabel="Org. team"
          headingText={item && item.properties && item.properties.name}
          left={<Head />}
          right={<Members />}
        />
      </Block>
    </React.Fragment>
  )
}
export default Content
