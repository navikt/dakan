import React, { useState, useEffect, useRef } from 'react'
import { useSharedContext } from '../components/SharedContextProvider'
import SearchBoxView from '../components/SearchBoxView'

function SearchBox({
    customQuery,
    fields,
    id,
    initialValue,
    placeholder,
    setPage,
}) {
    const [{ widgets, isSearching }, dispatch] = useSharedContext()
    const [value, setValue] = useState(initialValue || '')
    const [searchTerm, setSearchTerm] = useState(initialValue || '')
    const intervalRef = useRef(null)

    useEffect(() => {
        if (searchTerm === '') {
            intervalRef.current = setTimeout(() => {
                update(searchTerm)
            }, 1000)
        } else {
            clearTimeout(intervalRef.current)
        }
        return () => clearTimeout(intervalRef.current)
    }, [searchTerm])

    // Update external query on mount.
    useEffect(() => {
        update(searchTerm)
    }, [])

    const getResultsOnSearch = () => {
        if (searchTerm !== value) {
            intervalRef.current = setTimeout(() => {
                update(searchTerm)
            }, 1000)
        }
    }

    // If widget value was updated elsewhere (ex: from active filters deletion)
    // We have to update and dispatch the component.
    useEffect(() => {
        widgets.get(id) && update(widgets.get(id).value)
    }, [isValueReady()])

    // Build a query from a value.
    function queryFromValue(query) {
        if (customQuery) {
            return customQuery(query)
        } else if (fields) {
            return query
                ? { multi_match: { query, type: 'most_fields', fields } }
                : { match_all: {} }
        }
        return { match_all: {} }
    }

    // This functions updates the current values, then dispatch
    // the new widget properties to context.
    // Called on mount and value change.
    function update(v) {
        setValue(v)
        dispatch({
            type: 'setWidget',
            key: id,
            needsQuery: true,
            needsConfiguration: false,
            isFacet: false,
            wantResults: false,
            query: queryFromValue(v),
            value: v,
            configuration: null,
            result: null,
        })
        setPage(1)
    }

    // Checks if widget value is the same as actual value.
    function isValueReady() {
        return !widgets.get(id) || widgets.get(id).value === value
    }

    // Destroy widget from context (remove from the list to unapply its effects)
    useEffect(() => () => dispatch({ type: 'deleteWidget', key: id }), [])

    return (
        <div>
            {isSearching}
            <SearchBoxView
                searchTerm={searchTerm}
                placeholder={placeholder}
                setSearchTerm={setSearchTerm}
                getResultsOnSearch={getResultsOnSearch}
                queryFromValue={queryFromValue}
            />
        </div>
    )
}

export default SearchBox
