import * as React from 'react'
import { Searchbox } from '@dakan/ui'
import { Block } from 'baseui/block'

const SearchInput = (props) => {
  const { getInputProps, getAutocomplete } = props

  return (
    <Block width="100%" role="textbox" aria-label="tekstboks for søk">
      <Searchbox
        {...getInputProps()}
        clearable
      />
      {getAutocomplete()}
    </Block>
  )
}
export default SearchInput