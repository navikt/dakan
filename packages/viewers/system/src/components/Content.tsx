import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

const ITEMS = [{ item: 'slack', label: 'Slack', format: 'slackchannel' }]

const Content = ({ item, id }) => {
  const Head = () => (
    <Block>
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />
    </Block>
  )

  const getHeadingText = () => {
    return <Block>{item && item.properties && item.properties.name}</Block>
  }

  return (
    <React.Fragment>
      <Block>
        {JSON.stringify(item)}
        <Layout
          headingLabel="System"
          headingText={getHeadingText()}
          left={<Head />}
          right={null}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
