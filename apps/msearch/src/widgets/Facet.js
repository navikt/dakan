import React, { useState, useEffect } from 'react'
import { toTermQueries } from '../components/utils'
import { useSharedContext } from '../components/SharedContextProvider'
import { CheckboxFacetView } from './CheckboxFacetView'
import { PanelFacetView } from './PanelFacetView'

function Facet({
    fields,
    id,
    initialValue,
    seeMore,
    placeholder,
    showFilter = true,
    filterValueModifier,
    itemsPerBlock,
    items,
    type,
    title,
}) {
    const [{ widgets }, dispatch] = useSharedContext()
    // Current filter (search inside facet value).
    const [filterValue, setFilterValue] = useState('')
    // Number of itemns displayed in facet.
    const [size, setSize] = useState(itemsPerBlock || 9)
    // The actual selected items in facet.
    const [value, setValue] = useState(initialValue || [])
    // Data from internal queries (Elasticsearch queries are performed via Listener)
    const { result } = widgets.get(id) || {}
    const data = (result && result.data) || []
    const total = (result && result.total) || 0

    // Update widgets properties on state change.
    useEffect(() => {
        dispatch({
            type: 'setWidget',
            key: id,
            needsQuery: true,
            needsConfiguration: true,
            isFacet: true,
            wantResults: false,
            query: { bool: { should: toTermQueries(fields, value) } },
            value,
            configuration: { size, filterValue, fields, filterValueModifier },
            result: data && total ? { data, total } : null,
        })
    }, [size, filterValue, value])

    // If widget value was updated elsewhere (ex: from active filters deletion)
    // We have to update and dispatch the component.
    useEffect(() => {
        widgets.get(id) && setValue(widgets.get(id).value)
    }, [isValueReady()])

    // Destroy widget from context (remove from the list to unapply its effects)
    useEffect(() => () => dispatch({ type: 'deleteWidget', key: id }), [])

    // Checks if widget value is the same as actual value.
    function isValueReady() {
        return !widgets.get(id) || widgets.get(id).value === value
    }

    // On checkbox status change, add or remove current agg to selected
    function handleChange(item, checked) {
        const newValue = checked
            ? [...new Set([...value, item.key])]
            : value.filter((f) => f !== item.key)
        setValue(newValue)
    }

    // Is current item checked?
    function isChecked(item) {
        return value.includes(item.key)
    }

    return (
        <React.Fragment>
            {type === 'panel' ? (
                <PanelFacetView
                    placeholder={placeholder}
                    showFilter={showFilter}
                    setFilterValue={setFilterValue}
                    filterValue={filterValue}
                    items={items}
                    handleChange={handleChange}
                    size={size}
                    data={data}
                    isChecked={isChecked}
                    setSize={setSize}
                    seeMore={seeMore}
                    itemsPerBlock={itemsPerBlock}
                    title={title}
                />
            ) : (
                <CheckboxFacetView
                    placeholder={placeholder}
                    showFilter={showFilter}
                    setFilterValue={setFilterValue}
                    filterValue={filterValue}
                    items={items}
                    handleChange={handleChange}
                    size={size}
                    data={data}
                    isChecked={isChecked}
                    setSize={setSize}
                    seeMore={seeMore}
                    itemsPerBlock={itemsPerBlock}
                    title={title}
                />
            )}
        </React.Fragment>
    )
}

export default Facet
