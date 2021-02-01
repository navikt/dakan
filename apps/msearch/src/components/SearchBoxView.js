import * as React from 'react'
import Autocomplete from './Autocomplete'
import { Searchbox } from '@dakan/ui'
import Downshift from 'downshift'
import { Block } from 'baseui/block'

const SearchInput = (props) => {
  const { searchTerm, setSearchTerm, getAutocomplete, placeholder, ...rest } = props

  return (
    <React.Fragment>
      <Block width="100%" role="textbox" aria-label="tekstboks for søk">
        <Searchbox
          {...rest}
          inputValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || 'søk…'}
          //startEnhancer={isSearching ? <Spinner/> : null}
          clearable
        />
        {getAutocomplete()}
      </Block>
    </React.Fragment>
  )
}

const SearchBoxView = (props) => {
  const { className, searchTerm, placeholder, setSearchTerm, results, ...rest } = props
  return (
    <Downshift
      inputValue={searchTerm}
      itemToString={() => searchTerm}
      {...rest}
    >
      {(downshiftProps) => {
        const { closeMenu, isOpen, getLabelProps, getInputProps } = downshiftProps
        return (
          <div {...getLabelProps()} aria-label="Søkeboks">
            <form
              onSubmit={() => {
                closeMenu()
              }}
            >
                <SearchInput
                  {...downshiftProps}
                  {...getInputProps()}
                  placeholder={placeholder}
                  inputValue={searchTerm}
                  setSearchTerm={setSearchTerm}
                 
                  getAutocomplete={() => {
                    if (
                      searchTerm &&
                      results.length > 0
                    ) {
                      return (
                        <Autocomplete
                          autocompletedResults={results}
                          autocompleteResults={{
                            titleField: 'title',
                            urlField: '_id',
                            sourceField: '_source',
                            scoreField: '_score',
                          }} />
                      )
                    } else {
                      return null
                    }
                  }}
                />
            </form>
          </div>
        )
      }}
    </Downshift>
  )
}
export default SearchBoxView