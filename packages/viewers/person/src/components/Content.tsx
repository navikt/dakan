import * as React from 'react'
import { Block } from 'baseui/block'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'
import GetValue from '../utils/GetValue'

import { LargeWidth, LabeledContent } from '@dakan/ui'

const ITEMS = [
  { item: 'email', label: 'Epost' },
  { item: 'resourceType', label: 'Ansatt' },
  { item: 'startDate', label: 'Startdato' },
  { item: 'endDate', label: 'Sluttdato' },
]

const TEAMITEMS = [
  { item: 'teamname', label: 'Team' },
  { item: 'team_type', label: 'Type team' },
  { item: 'roles', label: 'Roller' },
]

const Content = ({ item }) => {
  const getItems = (items: Array<{}>, content) => {
    return items.map((entry: any, i: number) => {
      let value = GetValue(() => content[entry.item])
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
    })
  }

  const Person = () => {
    if (item) {
      return (
        <FlexGrid flexGridColumnCount={[1, 2, 2, 3]}>
          {getItems(ITEMS, item)}
        </FlexGrid>
      )
    }
    return null
  }

  const Teams = () => {
    if (item && item['teams']) {
      const teams = item['teams']
      return teams.map((team, index) => (
        <FlexGrid key={`${team}_${index}`} flexGridColumnCount={[1, 2, 2, 3]}>
          {getItems(TEAMITEMS, team)}
        </FlexGrid>
      ))
    }
    return null
  }

  return (
    <LargeWidth headingLabel="Ressurs" headingText={item.fullName}>
      <Block>
        <Person />
      </Block>
      <Block marginTop="scale800">
        <Teams />
      </Block>
    </LargeWidth>
  )
}
export default Content
