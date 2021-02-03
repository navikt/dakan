import React, { useEffect, useState } from 'react'
import { useSharedContext } from '../components/SharedContextProvider'
import { Label } from '@dakan/ui'
import { Pagination } from 'baseui/pagination'
import ActiveFilters from '../components/ActiveFilters'
import { Block } from 'baseui/block'
import { Spinner } from 'baseui/spinner'
import Result from './Result'

// Pagination, informations about results (like "30 results")
// and size (number items per page) are customizable.
function Results({
    itemsPerPage,
    initialPage = 1,
    pagination,
    stats,
    items,
    id,
    sort,
}) {
    const [{ widgets, isSearching }, dispatch] = useSharedContext()
    const [initialization, setInitialization] = useState(true)
    const [page, setPage] = useState(initialPage)
    const widget = widgets.get(id)
    const data =
        widget && widget.result && widget.result.data ? widget.result.data : []
    const totalPages =
        widget && widget.result && widget.result.total ? widget.result.total : 0
    itemsPerPage = itemsPerPage || 10

    const total = totalPages && totalPages.value ? totalPages.value : totalPages

    useEffect(() => {
        setPage(initialization ? initialPage : 1)
        return () => setInitialization(false)
    }, [initialPage, initialization, total.value])

    // Update context with page (and itemsPerPage)
    useEffect(() => {
        dispatch({
            type: 'setWidget',
            key: id,
            needsQuery: false,
            needsConfiguration: true,
            isFacet: false,
            wantResults: true,
            query: null,
            value: null,
            configuration: { itemsPerPage, page, sort },
            result: data && total ? { data, total } : null,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, sort])

    // Destroy widget from context (remove from the list to unapply its effects)
    useEffect(() => () => dispatch({ type: 'deleteWidget', key: id }), [])

    const defaultPagination = () => (
        <Pagination
            numPages={Math.min(
                Math.ceil(total / itemsPerPage),
                10000 / itemsPerPage
            )}
            currentPage={page}
            onPageChange={({ nextPage }) => {
                setPage(Math.min(Math.max(nextPage, 1)))
            }}
        />
    )

    return (
        <Block>
            <Block marginTop="scale400" marginBottom="scale600" width="100%">
                {isSearching ? (
                    <Spinner size='20px' />
                ) : 
                <Label>{total ? `Antall treff: ${total}` : 'Ingen treff'}</Label>
                }
            </Block>
            <ActiveFilters id="af" />
            <Block
                marginTop="scale400"
                marginBottom="scale600"
                width="100%"
                overrides={{
                    Block: {
                        style: { borderBottom: '1px solid #efefef' },
                    },
                }}
            />
            <Block>
                {data.map((item, index) => {
                    return (
                        <Result
                            key={`result_${item._source.id}`}
                            result={item._source}
                            titleField="title"
                            handleChange
                            even={index % 2}
                        />
                    )
                })}
                <Block marginTop="scale400">
                    {total > 1
                        ? pagination
                            ? pagination(
                                  total,
                                  itemsPerPage,
                                  page,
                                  setPage
                              )
                            : defaultPagination()
                        : null}
                </Block>
            </Block>
        </Block>
    )
}

export default Results
