import * as React from 'react'
import { Block } from 'baseui/block'
import { Avatar } from 'baseui/avatar'
import { ParagraphMedium } from 'baseui/typography'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'
import GetValue from '../utils/GetValue'

import { LayoutSplit as Layout, LabeledContent } from '@dakan/ui'

import { OrgTeam } from './OrgTeam'

const ITEMS = [
  { item: 'epost', label: 'Epost' },
  { item: 'tlf', label: 'telefon' },
  { item: 'avdeling', label: 'avdeling' },
  { item: 'resourcetype', label: 'Ansatt' },
  { item: 'startdato', label: 'Startdato' },
  { item: 'sluttdato', label: 'Sluttdato' },
]

const Content = ({ item, id }) => {
  const getItems = (items: Array<{}>, content) => {
    return items.map((entry: any, i: number) => {
      let value = GetValue(() => content.properties[entry.item], null)
      if (value && value !== '') {
        if (entry.format && entry.format === 'date') {
          const date = new Date(value)
          if (typeof date.getMonth === 'function') {
            value = format(date, 'yyyy-MM-dd')
          }
        }

        return (
          <FlexGridItem key={`item_${i}`}>
            <LabeledContent description={entry.label} list>
              {value}
            </LabeledContent>
            <Block width="scale1000" />
          </FlexGridItem>
        )
      }
      return null
    })
  }

  const Content = () => {
    if (item) {
      return (
        <FlexGrid flexGridColumnCount={[1]}>{getItems(ITEMS, item)}</FlexGrid>
      )
    }
    return null
  }

  const Head = () => (
    <Block>
      <ParagraphMedium>{item && item.fornavn}</ParagraphMedium>
      <Content />
    </Block>
  )

  const getAffiliations = () => {
    if (item && item.id) {
      return (
        <Block width="100%" marginBottom="scale1200">
          <OrgTeam id={item.id} />
        </Block>
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
