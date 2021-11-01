import PropTypes from 'prop-types'
import React from 'react'
import { FacetValue, FilterValue } from './types'
import { getFilterValueDisplay } from './view-helpers'

import { Block } from 'baseui/block'
import { Label2 } from 'baseui/typography'

import { Tabs, Tab, StyledTab } from 'baseui/tabs'

function TabOverride({ children, ...rest }) {
  return (
    <StyledTab {...rest}>
      <Label2
        overrides={{
          Block: {
            style: { color: 'inherit', ':hover': { color: 'inherit' } },
          },
        }}
      >
        {children}
      </Label2>
    </StyledTab>
  )
}
const tabStyle = ({ $active, $disabled, $theme }) => ({
  outlineColor: $theme.colors.white,
  color: $active ? $theme.colors.mono100 : $theme.colors.mono300,
  ':hover': $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
  ':focus': $disabled
    ? {}
    : {
        color: $theme.colors.mono100,
      },
})
const tabBarStyle = ({ $theme }) => ({
  backgroundColor: $theme.colors.mono600,
})
const tabContentStyle = ({ $theme }) => ({
  borderLeftWidth: '2px',
  borderRightWidth: '2px',
  borderBottomWidth: '2px',
  borderTopWidth: '0',
  borderStyle: 'dashed',
  borderColor: $theme.colors.mono600,
})

function TabFacet({
  className,
  label,
  onMoreClick,
  onRemove,
  onSelect,
  options,
  showMore,
  values,
  showSearch,
  onSearch,
  searchPlaceholder,
}) {
  const setActiveKey = (key) => {
    onSelect(key)
    //console.log(key)
  }
  return (
    <Block
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.white,
          }),
        },
      }}
    >
      <Tabs
        onChange={({ activeKey }) => {
          setActiveKey(activeKey)
        }}
        overrides={{
          TabBar: {
            style: tabBarStyle,
          },
          TabContent: {
            style: tabContentStyle,
          },
        }}
      >
        {options.length < 1 && <div>No matching options</div>}
        {options.map((option) => {
          return (
            <Tab
              key={option.value}
              title={
                getFilterValueDisplay(option.value) +
                ' - ' +
                option.count.toLocaleString('en')
              }
              overrides={{
                Tab: { component: TabOverride, style: tabStyle },
              }}
            />
          )
        })}
      </Tabs>
    </Block>
  )
}

TabFacet.propTypes = {
  label: PropTypes.string.isRequired,
  onMoreClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(FacetValue).isRequired,
  showMore: PropTypes.bool.isRequired,
  values: PropTypes.arrayOf(FilterValue).isRequired,
  className: PropTypes.string,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
}

export default TabFacet
