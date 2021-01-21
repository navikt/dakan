import React from 'react'
import { Block } from 'baseui/block'
import { Searchbox } from '@dakan/ui'

function SearchInput({ getAutocomplete, getInputProps }) {
  return (
    <React.Fragment>
      <Block width="100%" role="textbox" aria-label="tekstboks for søk">
        <Searchbox
          {...getInputProps()}
          placeholder="Søk etter data, datasett, begreper..."
        />
        {getAutocomplete()}
      </Block>
    </React.Fragment>
  )
}

export default SearchInput
