import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium } from 'baseui/typography'
import { StyledLink } from 'baseui/link'
import { LayoutSplit as Layout, ContentItems, LabeledContent } from '@dakan/ui'
import { renderDeclarativeRules } from 'styletron-standard'
import ReactMarkdown from 'react-markdown'
import { useStyletron } from 'baseui'

const ITEMS = [
  { item: 'apiRevision', label: 'Api Revision' },
  { item: 'subscriptionRequired', label: 'Subscription Required' },
  { item: 'serviceUrl', label: 'Service Url' },
  { item: 'path', label: 'Path' },
  { item: 'protocols', label: 'Protocols' },
  { item: 'authenticationSettings', label: 'Authentication Settings' },
  { item: 'subscriptionKeyParameterNames', label: 'Subscription Key Parameter Names' },
  { item: 'isCurrent', label: 'Is Current' },
  { item: 'apiVersion', label: 'Api Version' },
]

const Content = ({ item, id }) => {
  const [, theme] = useStyletron()
  const Head = () => {
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
          <LabeledContent description="Api description" list>
            <StyledLink aria-label="Link til Api beskrivelse" href={item.content.api_dec}>{item.content.api_dec}</StyledLink>
          </LabeledContent>
        </Block>
      </div>
    )
  }

  const RightContent = () => {
    const itemProperties = {
      properties: item.content
    }
    return (
      <div role="complementary" >
        <ContentItems ITEMS={ITEMS} item={itemProperties} />
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
            right={<RightContent />}
          />
        </Block>)}
    </React.Fragment>
  )
}

export default Content
