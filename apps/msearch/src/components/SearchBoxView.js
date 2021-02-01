import * as React from 'react'
import Autocomplete from './Autocomplete'
import { Searchbox } from '@dakan/ui'
import { useCombobox } from 'downshift'
import { Block } from 'baseui/block'

const SearchBoxView = (props) => {
  const { searchTerm, placeholder, setSearchTerm, results } = props

  return (
    <React.Fragment>
      <Block width="100%" role="textbox" aria-label="tekstboks for søk">
        <Searchbox
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || 'søk…'}
          //startEnhancer={isSearching ? <Spinner/> : null}
          clearable
        />
      </Block>
    </React.Fragment>
  )
}
export default SearchBoxView