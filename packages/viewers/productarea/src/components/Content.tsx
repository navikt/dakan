import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

import { Members } from './Members'
import { OrgTeam } from './OrgTeam'

const ITEMS = [{ item: 'lastchanged', label: 'Oppdatert' }]

const Content = ({ item, id }) => {
  const Head = () => (
    <Block>
      <ParagraphMedium>
        {item && item.properties && item.properties.description}
      </ParagraphMedium>
      <ContentItems ITEMS={ITEMS} item={item} />
    </Block>
  )

  const getAffiliations = () => {
    if (item && item.id) {
      return (
        <Block>
          <Members id={item.id} />
          <OrgTeam id={item.id} />
        </Block>
      )
    }
    return null
  }

  const getHeadingText = () => {
    return <Block>{item && item.properties && item.properties.name}</Block>
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Produktområde"
          headingText={getHeadingText()}
          left={<Head />}
          right={getAffiliations()}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
