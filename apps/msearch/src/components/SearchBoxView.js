import * as React from 'react'
import Autocomplete from './Autocomplete'
import Downshift from 'downshift'
import SearchInput from './SearchInput'

const SearchBoxView = (props) => {
  const { searchTerm, placeholder, setSearchTerm, results } = props

  console.log(searchTerm)
  return (
    <Downshift
      inputValue={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onInputValueChange={(newValue) => {
        // To avoid over dispatching
        if (searchTerm === newValue) return
        setSearchTerm(newValue)
      }}
      // Because when a selection is made, we don't really want to change
      // the inputValue. This is supposed to be a "controlled" value, and when
      // this happens we lose control of it.
      itemToString={() => searchTerm}
    >
      {(downshiftProps) => {
        const { closeMenu, isOpen, getLabelProps, getInputProps } = downshiftProps
        return (
          <div {...getLabelProps()} aria-label="Søkeboks">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                closeMenu()
              }}
            >
              <SearchInput
                {...downshiftProps}
                getInputProps={(additionalProps) => {
                  const { ...rest } = additionalProps || {}
                  return getInputProps({
                    placeholder: placeholder || 'søk…',
                    ...rest,
                  })
                }}
                getAutocomplete={() => {
                  if (
                    searchTerm &&
                    isOpen &&
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
                        }}
                        {...downshiftProps}
                      />
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