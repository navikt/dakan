/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react'
import { Panel, LayoutSearch, FilterIcon, Label } from '@dakan/ui'
import { Block } from 'baseui/block'
import { Accordion } from 'baseui/accordion'
import { Select } from 'baseui/select'
import Elasticsearch from '../components/Elasticsearch'
import Results from '../widgets/Results'
import Facet from '../widgets/Facet'
import SearchBox from '../widgets/SearchBox'

import qs from 'qs'

import env from '@beam-australia/react-env'

const server = env('ELASTIC_ENDPOINT')
const index = env('ELASTIC_INDEX')
const url = `${server}/${index}` 

const SORTKEYSOPTIONS = [{'id':"issued", "label":"Dato"},{"id":"title.keyword", "label":"Tittel"}]
const SORTDIRECTIONOPTIONS = [{"id":"asc", "label": "Stigende"},{"id": "desc", "label": "Synkende"}]
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
    const initialValues = fromUrlQueryString(
        window.location.search.replace(/^\?/, '')
    )

    function getSelectIndexPosition(options, key) {
        const option = options.find(x => x.id === initialValues.get(key))
        if (option) {
            return [option]
        }
        return [options[0]]
    }

    const [queryString, setQueryString] = useState('')
    const [values, setValues] = useState({})

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
        getSelectIndexPosition(SORTKEYSOPTIONS,'sortKey')
    )

    const [sortQuery, setSortQuery] = useState([{ [sortKey]: { order: sortOrder } }]);
    
    useEffect(() => {
        setSortOrder(sortOrderOption[0][VALUE_KEY])
        setSortKey(sortKeyOption[0][VALUE_KEY])
        setSortQuery([{ [sortKeyOption[0][VALUE_KEY]]: { order: sortOrderOption[0][VALUE_KEY] } }]);
      }, [sortKeyOption, sortOrderOption]);

    const onChange = (values) => {
        if (values.size) {
            values.set("sortKey", sortKey) 
            values.set("sortOrder",sortOrder ) 
        }
        const q = toUrlQueryString(values)
        if (q) {
            window.history.replaceState('x', 'y', `?${q}`)
        } 
    }

    const fields = SEARCHFIELDS

    const LeftSidebar = (props) => {
        return (
            <Block role="navigation">
                <Block display={['none', 'flex']} marginBottom="scale750">
                    <Block marginRight="scale200">
                        <FilterIcon size="24" fill="#3E3832" />
                    </Block>
                    <Label>Filter</Label>
                </Block>

                <Block>
                    <Label>Format</Label>
                    <Facet
                        id="format"
                        fields={['format.keyword']}
                        showFilter={false}
                        initialValue={initialValues.get('format')}
                    />
                </Block>
                <Block marginTop='scale600'>
                <Label>Sortering</Label>
                <Block marginTop='scale400'>
                <Select  onChange={({value}) => setSortKeyOption(value)} value={sortKeyOption}
                    options = {SORTKEYSOPTIONS}
                    labelKey={VALUE_LABEL}
                    valueKey={VALUE_KEY}
                    value={sortKeyOption}
                    clearable={false}
                >
                </Select>
                </Block>
                <Block marginTop='scale400'>
                <Select onChange={({value}) => setSortOrderOption(value)} value={sortOrderOption}
                    options = {SORTDIRECTIONOPTIONS}
                    labelKey={VALUE_LABEL}
                    value={sortOrderOption}
                    valueKey={VALUE_KEY}
                          clearable={false}>
                </Select>
                </Block>
                </Block>
            </Block>
        )
    }

    const RightSidebar = () => {
        return (
            <Block role="contentinfo">
                <Facet
                    title="Stikkord"
                    id="keyword"
                    fields={['keyword.keyword']}
                    showFilter={false}
                    type="panel"
                    initialValue={initialValues.get('keyword')}
                />
                <Facet
                    title="Forfatter"
                    id="creator.name"
                    fields={['creator.name.keyword']}
                    showFilter={false}
                    type="panel"
                    initialValue={initialValues.get('creator.name')}
                />
                <Facet
                    title="Opprinnelse"
                    id="provenance"
                    fields={['provenance.keyword']}
                    showFilter={false}
                    type="panel"
                    initialValue={initialValues.get('provenance')}
                />
            </Block>
        )
    }

    const Content = (props) => {
        const [panelExpanded, setPanelExpanded] = React.useState('')
        return (
            <React.Fragment>
                <Block flex="1" role="main">
                    <Block marginBottom="scale800">
                        <Block role="search">
                            <SearchBox
                                id="term"
                                fields={fields}
                                initialValue={initialValues.get('term')}
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
                                    {LeftSidebar(props)}
                                </Block>
                            </Panel>
                        </Accordion>
                    </Block>
                    <Results
                        sort={sortQuery}
                        id="result"
                        itemsPerPage="12"
                        initialPage={1}
                    />
                </Block>
            </React.Fragment>
        )
    }

    return (
        <Elasticsearch
            url={url}
            onChange={(values) => onChange(values)}
        >
            <LayoutSearch
                left={LeftSidebar(props)}
                right={Content(props)}
                options={RightSidebar(props)}
            />
        </Elasticsearch>
    )
}

export default SearchPage