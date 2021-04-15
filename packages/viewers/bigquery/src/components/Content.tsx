import * as React from 'react'
import { Block } from 'baseui/block'
import { LayoutSplit as Layout, LabeledContent } from '@dakan/ui'
import Metadata from './Metadata'
import AuditLogs from './AuditLogs'
import Schema from './Schema'

const Content = ({ item, id }) => {
  if (!item) return null

  const Right = () => {
    return (
      <Block>
        <Schema id={1} />
        <Block marginTop="scale1200">
          <AuditLogs id={1} />
        </Block>
      </Block>
    )
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="BigQuery"
          headingText={item.title}
          left={<Metadata item={item} />}
          right={<Right />}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
