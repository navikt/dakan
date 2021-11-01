import * as React from 'react'
import { Select } from 'baseui/select'
import {KIND, SIZE, Button as BaseButton} from 'baseui/button';
import {StatefulButtonGroup, MODE} from 'baseui/button-group';
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { withSearch } from '@elastic/react-search-ui'

const findSortOption = (sortOptions, sortString) => {
  const [value, direction] = sortString.split('|||')
  return sortOptions.find(
    (option) => option.value === value && option.direction === direction,
  )
}

const formatValue = (sortField, sortDirection) => {
  return `${sortField}|||${sortDirection}`
}

const formatSelectOption = (sortOption) => {
  return {
    label: sortOption.name,
    value: formatValue(sortOption.value, sortOption.direction),
  }
}

export const SORTMODE = {
  BUTTONS: 'buttons',
  SELECT: 'select',
}

export const Sorting = ({
  label,
  setSort,
  sortDirection,
  sortField,
  sortOptions,
  mode
}) => {
  const options = sortOptions.map(formatSelectOption)
  const value = formatValue(sortField, sortDirection)


  const OptionSelect = () => {

    const onChange = (option) => {
      const sortOption = findSortOption(sortOptions, option.value)
      setSort(sortOption.value, sortOption.direction)
    }
  
    const selectedOption = value
      ? options.find((option) => option.value === value)
      : null
  

    return (
      <Select
        placeholder=""
        labelKey="label"
        valueKey="value"
        value={selectedOption}
        onChange={(o) => onChange(o.option)}
        options={options}
        searchable={false}
    />
    )
  }

  const OptionButtons = () => {
    const buttons = options.map((option,index) => {
      return <BaseButton key={`sort_results_${index}`}>{option.label}</BaseButton>
    })

    const current = value ? options.findIndex((option) => option.value === value): 0

    const onClick = (e,selected) => {
      // console.log(selected)
      const sortOption = findSortOption(sortOptions, options[selected].value)
      setSort(sortOption.value, sortOption.direction)
    }
    return (
      <React.Fragment>
      <StatefulButtonGroup
        mode={MODE.radio}
        initialState={{selected: current}}
        onClick={onClick}
        size={SIZE.compact}
        kind={KIND.secondary}
      > 
        {buttons}
      </StatefulButtonGroup>
      </React.Fragment>
    )
  }

  return (
    <Block>
      {(mode && mode === SORTMODE.BUTTONS) ? (
        <Block display='flex' flexDirection='row' alignItems='center'>
          <Block marginRight='scale400'>
          <LabelMedium>{label}</LabelMedium>
          </Block>
          <OptionButtons />
        </Block> 
        )
      :
        (
          <OptionSelect />
        )
      }
    </Block>
  )
}

export default withSearch(({ sortDirection, sortField, setSort }) => ({
  sortDirection,
  sortField,
  setSort,
}))(Sorting)
