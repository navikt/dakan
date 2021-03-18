import * as React from 'react'
import { Block } from 'baseui/block'
import { Avatar } from 'baseui/avatar'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems, LabeledContent } from '@dakan/ui'
import { StyledLink } from 'baseui/link'

const ITEMS = [
  { item: 'description', label: 'Beskrivelse' },
  { item: 'uri', label: 'URI' },
]

const Content = ({ item, id }) => {
  const Head = () => {
    const itemProperties = {properties: item}
    
    return(
    <div role="main">
      <ContentItems ITEMS={ITEMS} item={itemProperties} />
    </div>
  )}

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Parquet"
          headingText={item.title}
          left={<Head />}
          right={<Block />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
