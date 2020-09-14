import * as React from 'react'
import { Block } from 'baseui/block'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { StyledLink } from 'baseui/link'
import { LabeledContent } from '../../datacatalog/labeledContent'
import { format } from 'date-fns'
import GetValue from '../../utils/GetValue/GetValue'

const getLink = (url, value) => <StyledLink href={url}>{value}</StyledLink>

export const ContentItems = ({ ITEMS, item }) => {
  const getItems = (items, content) => {
    return items.map((entry, index) => {
      let value = GetValue(() => content.properties[entry.item], null)
      if (value && value !== '' && value.length > 0) {
        if (Array.isArray(value)) {
          value = value.map((item) => {
            return <Block>{item}</Block>
          })
        }
        if (entry.format && entry.format === 'date') {
          const date = new Date(value)
          if (typeof date.getMonth === 'function') {
            value = format(date, 'yyyy-MM-dd')
          }
        }

        if (entry.format && entry.format === 'slackchannel') {
          value = value.replace('#', '')
          const link = `https://nav-it.slack.com/archives/${value}`
          value = getLink(link, value)
        }

        if (entry.format && entry.format === 'ad_group') {
          const link = `https://portal.azure.com/#blade/Microsoft_AAD_IAM/GroupDetailsMenuBlade/Members/groupId/${value}`
          value = getLink(link, 'Azure AD')
        }

        if (entry.format && entry.format === 'ad_profile') {
          const link = `https://portal.azure.com/#blade/Microsoft_AAD_IAM/UserDetailsMenuBlade/Profile/userId/${value}`
          value = getLink(link, 'Azure AD')
        }

        if (entry.format && entry.format === 'link') {
          value = getLink(value, value)
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
