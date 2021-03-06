import * as React from 'react'
import { Block } from 'baseui/block'
import { Avatar } from 'baseui/avatar'
import { ParagraphMedium } from 'baseui/typography'
import { LayoutSplit as Layout, ContentItems, LabeledContent } from '@dakan/ui'
import { StyledLink } from 'baseui/link'

import { OrgTeam } from './OrgTeam'
import { NaisTeam } from './NaisTeam'

const ITEMS = [
  { item: 'epost', label: 'Epost' },
  { item: 'tlf', label: 'Kontor telefon' },
  { item: 'mobil', label: 'Mobiltelefon' },
  { item: 'avdeling', label: 'Avdeling' },
  { item: 'resourcetype', label: 'Ansatt' },
  { item: 'startdato', label: 'Startdato' },
  { item: 'sluttdato', label: 'Sluttdato' },
  { item: 'aad_id', label: 'Profil', format: 'ad_profile' },
]

const Content = ({ item, id }) => {
  const Head = () => (
    <div role="main">
      <ContentItems ITEMS={ITEMS} item={item} />
    </div>
  )

  const getAffiliations = () => {
    if (item && item.id) {
      return (
        <div role="complementary">
          <Block width="100%" marginBottom="scale1200">
            <OrgTeam id={item.id} />
          </Block>
          <Block width="100%" marginBottom="scale1200">
            <NaisTeam id={item.id} />
          </Block>
        </div>
      )
    }
    return null
  }

  const getHeadingText = () => {
    const name = getName()
    const avatar = getAvatar()
    return (
      <Block>
        {name}
        {avatar}
      </Block>
    )
  }

  const getName = () => {
    if (
      item &&
      item.properties &&
      item.properties.fornavn &&
      item.properties.etternavn
    ) {
      return item.properties.fornavn + ' ' + item.properties.etternavn
    }
    return 'Ukjent'
  }

  const getAvatar = () => {
    if (item && item.properties && item.properties.profilbilde) {
      return (
        <Block marginBottom="scale1200">
          <Avatar
            name={getName()}
            size="scale1600"
            src={item.properties.profilbilde}
          />
        </Block>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Layout
          headingLabel="Ressurs"
          headingText={getHeadingText()}
          left={<Head />}
          right={getAffiliations()}
        />
      </Block>
    </React.Fragment>
  )
}

export default Content
