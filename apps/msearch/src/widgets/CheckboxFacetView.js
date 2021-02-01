import * as React from 'react'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Checkbox } from '@dakan/ui'
import { getFilterValueDisplay } from '../components/utils'
import { KIND } from 'baseui/button'


export const CheckboxFacetView = ({
    placeholder,
    showFilter,
    setFilterValue,
    filterValue,
    items,
    handleChange,
    size,
    data,
    isChecked,
    setSize,
    seeMore,
    itemsPerBlock,
}) => {
    return (
        <Block>
            {showFilter ? (
                <Input
                    value={filterValue}
                    placeholder={placeholder || 'filter…'}
                    type="text"
                    onChange={(e) => {
                        setFilterValue(e.target.value)
                    }}
                />
            ) : null}
            {items
                ? items(data, { handleChange, isChecked })
                : data.map((item) => (
                    <Checkbox
                        role="checkbox"
                        id={`checkboxfacet_${item.key}`}
                        checked={isChecked(item)}
                        title={item}
                        onChange={(e) => handleChange(item, e.target.checked)}
                    >
                        {getFilterValueDisplay(item.key)} ({item.doc_count})
                    </Checkbox>
                ))}
            {data.length === size ? (
                <Button onClick={() => setSize(size + (itemsPerBlock || 9))} kind={KIND.minimal}
                    aria-label="Vis flere">
                    {seeMore || 'vis flere'}
                </Button>
            ) : null}
        </Block>
    )
}

export default CheckboxFacetView
