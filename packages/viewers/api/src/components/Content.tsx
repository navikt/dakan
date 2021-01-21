import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'
import { renderDeclarativeRules } from 'styletron-standard'
import ReactMarkdown from 'react-markdown'
import { useStyletron } from 'baseui'

const ITEMS = [
  { item: 'slack', label: 'Slack', format: 'slackchannel' },
  { item: 'swagger', label: 'Url', format: 'link' },
]

const Content = ({ item, id }) => {
  const [, theme] = useStyletron()
  const Head = () => {
    const itemProperties = {
      properties: item.content
    }
    return (
      <div role="main">
      <Block
        overrides={{
          Block: {
            style: {
              marginTop: 0,
              marginBottom: 0,
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              ...theme.typography.font300,
            },
          },
        }}
      >
        <ReactMarkdown source={item.content.description} />
        <ContentItems ITEMS={ITEMS} item={itemProperties} />
      </Block>
      </div>
    )
  }

  const getHeadingText = () => {
    return <Block>{item.content.name}</Block>
  }

  return (
    <React.Fragment >
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
