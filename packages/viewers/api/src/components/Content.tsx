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
    const itemProperties = {
      properties: item.content
    }
    return (
    <Block>
      <ParagraphMedium>
        {item.content.description }
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={itemProperties} />
    </Block>
  )}

  const getHeadingText = () => {
    return <Block>{item.content.name}</Block>
  }

  return (
    <React.Fragment>
      {item && item.content && (
      <Block>
        <Layout
          headingLabel="API"
          headingText={getHeadingText()}
          left={<Head />}
          right={null}
        />
      </Block>)}
    </React.Fragment>
  )
}

export default Content
