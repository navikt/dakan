import * as React from 'react'
import { Block } from 'baseui/block'
import { Avatar } from 'baseui/avatar'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems } from '@dakan/ui'

import { Resources } from './Resources'
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
          <Block width="100%" marginBottom="scale1200">
            <Resources id={item.id} />
          </Block>
          <Block width="100%" marginBottom="scale1200">
            <OrgTeam id={item.id} />
          </Block>
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
