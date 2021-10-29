import React from 'react'
import deepEqual from 'deep-equal'
import amplitude from 'amplitude-js'
import { Checkbox } from '@dakan/ui'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { Button, KIND } from 'baseui/button'

import { getFilterValueDisplay } from './view-helpers'

const MultiCheckboxFacet = ({
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
  searchPlaceholder
}) => {
  const selectAndLog = (value) => {
    onSelect(value)
    const eventProperty = {
      filter: value.toLowerCase().replace(' ', '_'),
      type: label.toLowerCase(),
    }
    amplitude.getInstance().logEvent('filter-valg', eventProperty)
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
      <LabelMedium>
        <b>{label}</b>
      </LabelMedium>

      {showSearch && (
          <input
            type="search"
            placeholder={searchPlaceholder || "Search"}
            onChange={e => {
              onSearch(e.target.value);
            }}
          />
      )}

      <Block>
        {options.length < 1 && <div>Ingen funnet</div>}
        {options
          .sort((a, b) =>
            getFilterValueDisplay(a.value).toLowerCase() >
            getFilterValueDisplay(b.value).toLowerCase()
              ? 1
              : -1,
          )
          .map((option) => {
            const checked = !!values.find((value) => {
              if (value && value.name && option.value.name === value.name)
                return true
              if (deepEqual(option.value, value)) return true
              return false
            })
            return (
              <Block
                key={`facet_group_${label}${getFilterValueDisplay(
                  option.value,
                )}`}
              >
                <Block
                  marginBottom="scale300"
                />
                <Checkbox
                  id={`facet_${label}${getFilterValueDisplay(option.value)}`}
                  checked={checked}
                  onChange={() => {
                    checked
                      ? onRemove(option.value)
                      : selectAndLog(option.value)
                  }}
                >
                  {getFilterValueDisplay(option.value)} (
                  {option.count.toLocaleString('en')})
                </Checkbox>
              </Block>
            )
          })}
      </Block>

      {showMore && (
        <Block marginTop="scale800">
          <Button
            onClick={onMoreClick}
            kind={KIND.minimal}
            aria-label="Vis flere"
          >
            Vis flere
          </Button>
        </Block>
      )}
    </Block>
  )
}

export default MultiCheckboxFacet
