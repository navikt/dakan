import * as React from 'react'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Checkbox, Label } from '@dakan/ui'
import { getFilterValueDisplay } from '../components/utils'
import { KIND } from 'baseui/button'

import { logFilterUseToAmplitude } from '../components/utils'

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
    title
}) => {
    return (
        <Block>
            <Label>{title}</Label>
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
            {data.map((item) => (
                    <Checkbox
                        role="checkbox"
                        id={`checkboxfacet_${item.key}`}
                        checked={isChecked(item)}
                        title={getFilterValueDisplay(item.key)}
                        ariaLabel={`Filtrer etter ${getFilterValueDisplay(item.key)}`}
                        onChange={(e) => {
                            handleChange(item, e.target.checked)
                            if (e.target.checked) {
                                logFilterUseToAmplitude(getFilterValueDisplay(item.key), title)
                            }
                        }}
                    >
                        {getFilterValueDisplay(item.key)} ({item.doc_count})
                    </Checkbox>
                ))}
                <Button
                    onClick={() => setSize(size + (itemsPerBlock || 9))}
                    kind={KIND.minimal}
                    aria-label={`Vis flere filter for ${title}`}
                >
                    {seeMore || 'vis flere'}
                </Button>
        </Block>
    )
}

export default CheckboxFacetView
