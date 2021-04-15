import * as React from 'react'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Checkbox, Label } from '@dakan/ui'
import { getFilterValueDisplay } from '../components/utils'
import { KIND } from 'baseui/button'

import { logFilterUseToAmplitude } from '../components/utils'

export const CheckboxFacetView = ({
    id,
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
    title,
}) => {
    const labelRef = React.useRef(null)
    return (
        <Block>
            <div ref={labelRef}>
                <Label>{title}</Label>
            </div>
            {showFilter ? (
                <Input
                    key={`input_${id}`}
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
                    key={`checkboxfacet_${id}_${item.key}`}
                    checked={isChecked(item)}
                    title={getFilterValueDisplay(item.key)}
                    ariaLabel={`Filtrer etter ${getFilterValueDisplay(
                        item.key
                    )}`}
                    onChange={(e) => {
                        handleChange(item, e.target.checked)
                        if (e.target.checked) {
                            logFilterUseToAmplitude(
                                getFilterValueDisplay(item.key),
                                title
                            )
                        }
                        labelRef.current.scrollIntoView()
                    }}
                >
                    {getFilterValueDisplay(item.key)} ({item.doc_count})
                </Checkbox>
            ))}
            {data.length === size ? (
                <Button
                    key={`button_${id}`}
                    onClick={() => setSize(size + (itemsPerBlock || 9))}
                    kind={KIND.minimal}
                    aria-label={`Vis flere filter for ${title}`}
                >
                    {seeMore || 'vis flere'}
                </Button>
            ) : null}
        </Block>
    )
}

export default CheckboxFacetView
