import * as React from 'react'
import { Block } from 'baseui/block'
import { Button } from '@dakan/ui'
import { Tag } from '@dakan/ui'
import { KIND, SIZE } from 'baseui/button'
import { KIND as TAGKIND } from 'baseui/tag'
import { Card } from 'baseui/card'

import { logFilterUseToAmplitude } from '../components/utils'

export const PanelFacetView = ({
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
    allowedList,
}) => {
    const FacetCard = ({ data }) => {
        if (!data || data.length < 1) return null
        return (
            <Card title={title} aria-label={`Filtrer etter ${title}`}>
                <Block>
                    {data.map((item) =>
                        item.key ? (
                            <Tag
                                key={`checkboxfacet_${id}_${item.key}`}
                                closeable={false}
                                kind={TAGKIND.accent}
                                onClick={(e) => {
                                    handleChange(item, item)
                                    logFilterUseToAmplitude(item.key, title)
                                }}
                            >
                                {item.key}
                            </Tag>
                        ) : null
                    )}
                </Block>
            </Card>
        )
    }

    return (
        <Block marginBottom="scale600">
            {showFilter ? (
                <input
                    value={filterValue}
                    placeholder={placeholder || 'filter…'}
                    type="text"
                    onChange={(e) => {
                        setFilterValue(e.target.value)
                    }}
                />
            ) : null}
            {data && <FacetCard data={data} />}
            {data.length === size ? (
                <Button
                    aria-label={`Vis flere filter for ${title}`}
                    kind={KIND.minimal}
                    size={SIZE.compact}
                    onClick={() => setSize(size + (itemsPerBlock || 9))}
                >
                    {seeMore || 'se flere...'}
                </Button>
            ) : null}
        </Block>
    )
}

export default PanelFacetView
