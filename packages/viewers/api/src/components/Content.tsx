import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

const ITEMS = [
  { item: 'slack', label: 'Slack', format: 'slackchannel' },
  { item: 'swagger', label: 'Url', format: 'link' },
]

const Content = ({ item, id }) => {
  const Head = () =>{ 
    const node = {
      properties: item && item._source && item._source.content
    }
    return (
    <Block>
      <ParagraphMedium>
        {item && item._source && item._source.content && item._source.content.description }
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={node} />
    </Block>
  )}

  const getHeadingText = () => {
    return <Block>{item && item._source && item._source.content && item._source.content.name}</Block>
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="API"
          headingText={getHeadingText()}
          left={<Head />}
          right={null}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
