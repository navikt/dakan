/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react'
import { Panel, LayoutSearch, FilterIcon, Label } from '@dakan/ui'
import { Block } from 'baseui/block'
import { Accordion } from 'baseui/accordion'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Select, SIZE } from 'baseui/select'
import Elasticsearch from '../components/Elasticsearch'
import Results from '../widgets/Results'
import Facet from '../widgets/Facet'
import SearchBox from '../widgets/SearchBox'

import qs from 'qs'

import env from '@beam-australia/react-env'

const baseconfig = env('CONFIG') || { facets: [], panels: [] }
const facets = JSON.parse(baseconfig).facets
const panels = JSON.parse(baseconfig).panels
// const filters = JSON.parse(baseconfig).filters
// const resultsPerPage = JSON.parse(baseconfig).resultsPerPage

const server = env('ELASTIC_ENDPOINT')
const index = env('ELASTIC_INDEX')
const url = `${server}/${index}`

const SORTKEYSOPTIONS = [
    { id: 'issued', label: 'Dato' },
    { id: 'title.keyword', label: 'Tittel' },
    { id: '_score', label: 'Relevans' },
]
const SORTDIRECTIONOPTIONS = [
    { id: 'asc', label: 'Stigende' },
    { id: 'desc', label: 'Synkende' },
]
const VALUE_KEY = 'id'
const VALUE_LABEL = 'label'

const SEARCHFIELDS = [
    'title^18',
    'title.search^6',
    'decription^2',
    'description.search',
]

function fromUrlQueryString(str) {
    return new Map([
        ...Object.entries(qs.parse(str.replace(/^\?/, ''))).map(([k, v]) => {
            try {
                return [k, JSON.parse(v)]
            } catch (e) {
                return [k, v]
            }
        }),
    ])
}

function toUrlQueryString(params) {
    return qs.stringify(
        Object.fromEntries(
            new Map(
                Array.from(params)
                    .filter(([_k, v]) => (Array.isArray(v) ? v.length : v))
                    .map(([k, v]) => [k, JSON.stringify(v)])
            )
        )
    )
}

function SearchPage(props) {
    const [page, setPage] = useState(1)
    const initialValues = fromUrlQueryString(
        window.location.search.replace(/^\?/, '')
    )

    function getSelectIndexPosition(options, key) {
        const option = options.find((x) => x.id === initialValues.get(key))
        if (option) {
            return [option]
        }
        return [options[0]]
    }

    const [sortOrder, setSortOrder] = useState(
        initialValues.get('sortOrder') || 'asc'
    )
    const [sortKey, setSortKey] = useState(
        initialValues.get('sortKey') || 'title.keyword'
    )

    const [sortOrderOption, setSortOrderOption] = useState(
        getSelectIndexPosition(SORTDIRECTIONOPTIONS, 'sortOrder')
    )
    const [sortKeyOption, setSortKeyOption] = useState(
        getSelectIndexPosition(SORTKEYSOPTIONS, 'sortKey')
    )

    const [sortQuery, setSortQuery] = useState([
        { [sortKey]: { order: sortOrder } },
    ])

    useEffect(() => {
        setSortOrder(sortOrderOption[0][VALUE_KEY])
        setSortKey(sortKeyOption[0][VALUE_KEY])
        setSortQuery([
            {
                [sortKeyOption[0][VALUE_KEY]]: {
                    order: sortOrderOption[0][VALUE_KEY],
                },
            },
        ])
    }, [sortKeyOption, sortOrderOption])

    useEffect(() => {
        if (
            sortKeyOption[0]['label'] === 'Relevans' ||
            sortKeyOption[0]['label'] === 'Dato'
        ) {
            setSortOrderOption([SORTDIRECTIONOPTIONS[1]])
        } else {
            setSortOrderOption([SORTDIRECTIONOPTIONS[0]])
        }
    }, [sortKeyOption])

    const onChange = (values) => {
        if (values.size) {
            values.set('sortKey', sortKey)
            values.set('sortOrder', sortOrder)
        }
        const q = toUrlQueryString(values)
        if (q) {
            window.history.replaceState('x', 'y', `?${q}`)
        }
    }

    const fields = SEARCHFIELDS

    const getLeftSidebarFacet = (facet, index) => {
        let itemsPerBlock = 20

        if (facet.label === 'Type') {
            itemsPerBlock = 18
            // TODO: innfør kategorisering & env
            const data_facet_filter = [
                'parquet',
                'egg',
                'tabell',
                'oracle',
                'postgres',
                'bigquery',
                'kafka-aiven-topic',
                'kafka-topic',
                'kafka',
                'kafka-aiven',
                'API',
            ]
            const dataviz_facet_filter = [
                'datapackage',
                'tableau',
            ]
            const misch_facet_filter = [
                'begrep',
                'Nais applikasjon',
                'Nais team',
                'Team',
                'Person',
                'Produktområde',
            ]
            return (
                <Block marginBottom="scale1200" key="type_facet">
                    <Block  key={`facet_data_label_${index}`}>
                        <Block
                            display={['none', 'flex']}
                            marginBottom="scale750"
                        >
                            <Block marginRight="scale200">
                                <FilterIcon size="24" fill="#3E3832" />
                            </Block>
                            <Label>Type innhold</Label>
                        </Block>
                    </Block>
                    <Block
                        marginBottom="scale800"
                        key={`facet_data_${index}`}
                        aria-label={`Filtrer etter ${facet.label}`}
                    >
                        <Facet
                            title={'Data'}
                            id={facet.label}
                            fields={[`${facet.field}.keyword`]}
                            showFilter={false}
                            initialValue={initialValues.get(facet.field)}
                            setPage={setPage}
                            itemsPerBlock={itemsPerBlock}
                            type="filtered"
                            filter={data_facet_filter}
                        />
                    </Block>
                    <Block
                        marginBottom="scale800"
                        key={`facet_dataviz_${index}`}
                        aria-label={`Filtrer etter ${facet.label}`}
                    >
                        <Facet
                            title={'Innsikt'}
                            id={facet.label}
                            fields={[`${facet.field}.keyword`]}
                            showFilter={false}
                            initialValue={initialValues.get(facet.field)}
                            setPage={setPage}
                            itemsPerBlock={itemsPerBlock}
                            type="filtered"
                            filter={dataviz_facet_filter}
                        />
                    </Block>
                    <Block
                        marginBottom="scale1200"
                        key={`facet_misch_${index}`}
                        aria-label={`Filtrer etter ${facet.label}`}
                    >
                        <Facet
                            title={'Andre'}
                            id={facet.label}
                            fields={[`${facet.field}.keyword`]}
                            showFilter={false}
                            initialValue={initialValues.get(facet.field)}
                            setPage={setPage}
                            itemsPerBlock={itemsPerBlock}
                            type="filtered"
                            filter={misch_facet_filter}
                        />
                    </Block>
                </Block>
            )
        }

        return (
            <Block key={`facet_block_${facet.label}_${index}`}>
                <Block display={['none', 'flex']} marginBottom="scale750">
                    <Block marginRight="scale200">
                        <FilterIcon size="24" fill="#3E3832" />
                    </Block>
                    <Label>Tema</Label>
                </Block>
                <Block
                    marginBottom="scale1200"
                    key={`facet_${facet.label}_${index}`}
                    aria-label={`Filtrer etter ${facet.label}`}
                >
                    <Facet
                        id={facet.label}
                        fields={[`${facet.field}.keyword`]}
                        showFilter={false}
                        initialValue={initialValues.get(facet.field)}
                        setPage={setPage}
                        itemsPerBlock={itemsPerBlock}
                    />
                </Block>
            </Block>
        )
    }

    const getRightSidebarFacet = (facet, index) => (
        <Block marginBottom="scale1200" key={index}>
            <Facet
                title={facet.label}
                id={facet.label}
                fields={[`${facet.field}.keyword`]}
                showFilter={false}
                type="panel"
                initialValue={initialValues.get(facet.field)}
                setPage={setPage}
            />
        </Block>
    )

    const LeftSidebar = () => {
        return (
            <Block role="navigation">
                <Block>
                    {facets.map((f, index) => getLeftSidebarFacet(f, index))}
                </Block>
            </Block>
        )
    }

    const RightSidebar = () => {
        return (
            <Block role="complementary">
                {panels.map((p, index) => getRightSidebarFacet(p, index))}
            </Block>
        )
    }

    const Content = (props) => {
        const [panelExpanded, setPanelExpanded] = React.useState('')

        return (
            <Block flex="1" role="main">
                <Block marginBottom="scale800">
                    <Block role="search" aria-label="Søk etter data">
                        <SearchBox
                            id="term"
                            fields={fields}
                            initialValue={initialValues.get('term')}
                            setPage={setPage}
                        />
                    </Block>
                </Block>
                <Block display={['block', 'block', 'none']}>
                    <Accordion
                        onChange={(e) => setPanelExpanded(e.expanded[0])}
                    >
                        <Panel
                            title="Filter"
                            isExpanded={panelExpanded === '0'}
                        >
                            <Block marginBottom="scale800">
                                {LeftSidebar()}
                            </Block>
                        </Panel>
                    </Accordion>
                </Block>
                <Block marginTop="scale600">
                    <Label>Sortering</Label>
                    <FlexGrid
                        flexGridColumnCount={2}
                        flexGridColumnGap="scale400"
                        flexGridRowGap="scale800"
                    >
                        <FlexGridItem>
                            <Block
                                marginTop="scale400"
                                aria-label="Sortering av data"
                            >
                                <Select
                                    size={SIZE.mini}
                                    onChange={({ value }) =>
                                        setSortKeyOption(value)
                                    }
                                    options={SORTKEYSOPTIONS}
                                    labelKey={VALUE_LABEL}
                                    valueKey={VALUE_KEY}
                                    value={sortKeyOption}
                                    clearable={false}
                                ></Select>
                            </Block>
                        </FlexGridItem>
                        <FlexGridItem>
                            <Block
                                marginTop="scale400"
                                aria-label={`Sorteringsrekkefølge for ${sortKeyOption[0]['label']}`}
                            >
                                <Select
                                    size={SIZE.mini}
                                    onChange={({ value }) =>
                                        setSortOrderOption(value)
                                    }
                                    options={SORTDIRECTIONOPTIONS}
                                    labelKey={VALUE_LABEL}
                                    value={sortOrderOption}
                                    valueKey={VALUE_KEY}
                                    clearable={false}
                                ></Select>
                            </Block>
                        </FlexGridItem>
                    </FlexGrid>
                </Block>
                <Block marginTop="scale800" aria-label="Søkeresultater">
                    <Results
                        sort={sortQuery}
                        id="result"
                        itemsPerPage="12"
                        initialPage={1}
                        page={page}
                        setPage={setPage}
                    />
                </Block>
            </Block>
        )
    }

    return (
        <Elasticsearch url={url} onChange={(values) => onChange(values)}>
            <LayoutSearch
                left={LeftSidebar()}
                right={Content(props)}
                options={RightSidebar()}
            />
        </Elasticsearch>
    )
}

export default SearchPage
