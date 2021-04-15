import * as React from 'react'
import Downshift from 'downshift'
import axios from 'axios'
import env from '@beam-australia/react-env'

import { useSharedContext } from '../components/SharedContextProvider'
import Autocomplete from './Autocomplete'
import SearchInput from './SearchInput'

const server = env('ELASTIC_ENDPOINT') || ''
const index = env('ELASTIC_INDEX') || ''
const url = `${server}/${index}`

const SearchBoxView = (props) => {
    const [{ widgets }] = useSharedContext()
    const {
        searchTerm,
        placeholder,
        setSearchTerm,
        getResultsOnSearch,
        queryFromValue,
    } = props
    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        const createQuery = () => {
            const query = {
                bool: {
                    must: [queryFromValue(searchTerm)],
                },
            }

            widgets.forEach((item, index) => {
                if (index !== 'term' && index !== 'result') {
                    query.bool.must.push(item.query)
                }
            })

            return query
        }

        if (searchTerm.length >= 3) {
            axios
                .post(url, { query: createQuery() })
                .then((result) => {
                    setResults(result.data.hits.hits)
                })
                .catch((e) => console.log(e))
        } else if (searchTerm.length < 3) {
            setResults([])
        }
    }, [searchTerm, queryFromValue, widgets])

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
                const {
                    closeMenu,
                    isOpen,
                    getLabelProps,
                    getInputProps,
                } = downshiftProps
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
