import * as React from 'react'
import { Block } from 'baseui/block'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { LabeledContent } from '../../datacatalog/labeledContent'
import { format } from 'date-fns'
import GetValue from './GetValue'

export const ContentItems = ({ ITEMS, item }) => {
  const getItems = (items, content) => {
    return items.map((entry, index) => {
      let value = GetValue(() => content.properties[entry.item], null)
      if (value && value !== '') {
        if (entry.format && entry.format === 'date') {
          const date = new Date(value)
          if (typeof date.getMonth === 'function') {
            value = format(date, 'yyyy-MM-dd')
          }
        }

        if (entry.format && entry.format === 'slackchannel') {
          const link = value.replace('#', 'https://nav-it.slack.com/archives/')
          value = <a href={link}>{value}</a>
        }

        return (
          <FlexGridItem key={`item_${index}`}>
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

  return (
    <React.Fragment>
      {item && (
        <FlexGrid flexGridColumnCount={[1]}>{getItems(ITEMS, item)}</FlexGrid>
      )}
    </React.Fragment>
  )
}

export default ContentItems
