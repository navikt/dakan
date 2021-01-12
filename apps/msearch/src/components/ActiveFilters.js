import React from 'react'
import { Block } from 'baseui/block'
import { FilterIcon, Button } from '@dakan/ui'
import { KIND } from 'baseui/button'
import ArrowRight from 'baseui/icon/arrow-right'
import { useSharedContext } from './SharedContextProvider'
import { getLocal } from './utils'

function ActiveFilters({ items }) {
    const [{ widgets }, dispatch] = useSharedContext()
    const activeFilters = [...widgets]
        .filter(([, v]) => (Array.isArray(v.value) ? v.value.length : v.value))
        .filter(([key]) => key !== 'term')
        .map(([k, v]) => ({
            key: k,
            value: Array.isArray(v.value) ? v.value.join(', ') : v.value,
        }))

    // On filter remove, update widget properties.
    function removeFilter(id) {
        const widget = widgets.get(id)
        dispatch({
            type: 'setWidget',
            key: id,
            ...widget,
            value: widget.isFacet ? [] : '',
        })
    }

    function removeFilters() {
        activeFilters.forEach((filter) => {
            const widget = widgets.get(filter.key)
            widget &&
                dispatch({
                    type: 'setWidget',
                    key: filter.key,
                    ...widget,
                    value: widget.isFacet ? [] : '',
                })
        })
    }

    function filterText() {
        let filters = []
        activeFilters.map(({ key, value }) =>
            filters.push(getLocal(key) + ': ' + getLocal(value))
        )
        return filters.join('. ')
    }

    return (
        <div>
            {items ? (
                items(activeFilters, removeFilter)
            ) : (
                <Block width="100%" display={['none', 'block']}>
                    {activeFilters.length > 0 ? (
                        <Block
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                            paddingBottom="scale800"
                        >
                            <Block marginRight="scale200">
                                <FilterIcon size="24" fill="#3E3832" />
                            </Block>
                            <Block flex="1">{filterText()}</Block>
                            <Block align="right" marginRight="scale400">
                                <Button
                                    startEnhancer={() => (
                                        <ArrowRight size={24} />
                                    )}
                                    kind={KIND.secondary}
                                    onClick={() => removeFilters()}
                                >
                                    Fjern filter
                                </Button>
                            </Block>
                        </Block>
                    ) : null}
                </Block>
            )}
        </div>
    )
}

export default ActiveFilters
