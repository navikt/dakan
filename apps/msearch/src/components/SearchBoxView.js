import * as React from 'react'
import Autocomplete from './Autocomplete'
import Downshift from 'downshift'
import SearchInput from './SearchInput'
import { useSharedContext } from './SharedContextProvider'


const SearchBoxView = (props) => {
  const [{ widgets }] = useSharedContext()
  const { searchTerm, placeholder, setSearchTerm, getResultsOnSearch } = props
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    if (searchTerm.length >= 3) {
      const widget = searchTerm ? widgets.get('result') : null
      const data = widget && widget.result && widget.result.data ? widget.result.data : []
      setResults(data)
    } else if (searchTerm.length < 3) {
      setResults([])
    }
  }, [searchTerm])

  return (
    <Downshift
      inputValue={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value)
      }}

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
        const { closeMenu ,isOpen, getLabelProps, getInputProps } = downshiftProps
        return (
          <div {...getLabelProps()} aria-label="Søkeboks">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                closeMenu()
                getResultsOnSearch()
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
                getButtonProps={(additionalProps) => {
                  const { ...rest } = additionalProps || {}
                  return {
                    type: 'submit',
                    value: 'Search',
                    ...rest,
                  }
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