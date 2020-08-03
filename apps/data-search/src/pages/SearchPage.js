import React from 'react'
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  WithSearch,
  Results,
  PagingInfo,
  Paging,
  SearchBox
} from '@elastic/react-search-ui'
import '@elastic/react-search-ui-views/lib/styles/styles.css'
import {
  Panel,
  Layout,
  MediumWidth,
  FilterIcon,
} from '@dakan/ui'
import { Block } from 'baseui/block'
import { Accordion } from 'baseui/accordion'

import ResultView from '../components/views/ResultView'
import ResultsView from '../components/views/ResultsView'
import PagingInfoView from '../components/views/PagingInfoView'
import SearchBoxView from '../components/views/SearchBox'
import MultiCheckboxFacet from '../components/views/MultiCheckboxFacet'
import Sorting, {SORTMODE} from '../components/views/Sorting'
import TabFacet from '../components/views/TabFacet'
import {Paging as PagingView} from '../components/views/Paging'

import buildRequest from '../search/buildRequest'
import buildAutocompleteRequest from '../search/buildAutocompleteRequest'
import runRequest from '../search/runRequest'
import applyDisjunctiveFaceting from "../search/applyDisjunctiveFaceting";
import buildState from '../search/buildState'

import { LabelLarge } from 'baseui/typography'

import env from '@beam-australia/react-env'

const baseconfig = env('CONFIG') || { facets: [] }
const facets = JSON.parse(baseconfig).facets
const filters = JSON.parse(baseconfig).filters
const resultsPerPage = JSON.parse(baseconfig).resultsPerPage

const config = {
  debug: env('DEBUG') || false,
  hasA11yNotifications: true,
  onAutocomplete: async ({ searchTerm }) => {
    const requestBody = buildAutocompleteRequest({ searchTerm })
    const responseJson = await runRequest(requestBody)
    if (responseJson && responseJson['hits'] && responseJson['hits']['hits']) {
      return {
        autocompletedResults: responseJson['hits']['hits'],
      }
    }
  },
  onSearch: async (state) => {
    const { resultsPerPage } = state
    const requestBody = buildRequest(state)
    //console.log('search body', requestBody)
    const responseJson = await runRequest(requestBody)
    //console.log('search result', responseJson)
    const responseJsonWithDisjunctiveFacetCounts = await applyDisjunctiveFaceting(
      responseJson,
      state,
      ["format"]
    );

    return buildState(responseJsonWithDisjunctiveFacetCounts, resultsPerPage)
  },
  initialState: {
    resultsPerPage: resultsPerPage || 30,
    filters: filters || [
      {
        field: 'tittel',
        values: [''],
        type: 'any',
      },
    ],
    sortDirection: 'desc',
    sortField: 'modified',
  },
}

const Label = (props) => (
  <LabelLarge><b>{props.children}</b></LabelLarge>
)


const getFacet = (facet, index) => (
  <Block marginBottom="scale1200" key={index}>
    <Facet
      field={facet.field}
      label={facet.label}
      filterType="any"
      view={MultiCheckboxFacet}
      show={20}
    />
  </Block>
)

const Sort = () => (
  <Block>
    <Block marginBottom="scale300">
    <Label>Sorter</Label>
    </Block>
    <Block paddingRight="scale1200">
      <Sorting
        mode = {SORTMODE.SELECT}
        label={'Sorter:'}
        sortOptions={[
          {
            name: 'Relevans',
            value: '',
            direction: '',
          },
          {
            name: 'Publisert',
            value: 'modified',
            direction: 'desc',
          },
          {
            name: 'Tittel',
            value: 'title.keyword',
            direction: 'asc',
          },
        ]}
      />
      </Block>
  </Block>
)

const Sidebar = (props) => {
  if (props.match.params.mode !== 'tab') {
    return (
      <Block>
        <Block display={['none', 'flex']} marginBottom="scale750">
          <Block marginRight="scale200">
            <FilterIcon size="24" fill="#3E3832" />
          </Block> 
          <Label>Filter</Label>
        </Block>
        <Block>{facets.map((f, index) => getFacet(f, index))}</Block>
        <Sort />
      </Block>
    )
  }
}

// Show filter as tabs instead of checkboxes
const Tabbar = (props) => {
  const tabfacet = (facet, index) => (
    <Block marginBottom="scale1200" key={index}>
      <Facet field={facet.field} label={facet.label} view={TabFacet} />
    </Block>
  )
    return (
      <Block>
        <Block>{facets.map((f, index) => tabfacet(f, index))}</Block>
      </Block>
    )
}

const Content = (props) => {
  const [panelExpanded, setPanelExpanded] = React.useState('')

  return (
    <Block flex="1">
      <Block marginBottom="scale800">
        <Block>{searchbox()}</Block>
        <Block align="right" marginTop="scale400">
          <PagingInfo view={PagingInfoView} />
        </Block>
      </Block>
      <Block display={['block','block', 'none', ]}>
          <Accordion onChange={(e) => setPanelExpanded(e.expanded[0])}>
            <Panel title="Filter" isExpanded={panelExpanded === '0'}>
              <Block marginBottom="scale800">{Sidebar(props)}</Block>
            </Panel>
          </Accordion>
      </Block>
      {(props.match.params.mode === 'tab') && <Tabbar {...props} />}
      <Results titleField="title" view={ResultsView} resultView={ResultView} />
      <Block marginTop='scale800' marginBottom='scale800'>
      <Paging
        view={PagingView} 
      />
      </Block>
    </Block>
  )
}

const ResultPage = (props) => {
  if (props.match.params.mode === 'tab') {
    return <MediumWidth content={Content(props)} />
  } else {
    return (
      <Block marginTop="scale1400">
        <Layout left={Sidebar(props)} right={Content(props)} />
      </Block>
    )
  }
}

const searchbox = () => (
  <SearchBox
    autocompleteMinimumCharacters={1}
    autocompleteResults={{
      titleField: 'title',
      urlField: '_id',
      sourceField: '_source',
      scoreField: '_score',
    }}
    onAutocomplete={config.onAutocomplete}
    onSelectAutocomplete={(selection, {}, defaultOnSelectAutocomplete) => {
      if (selection.suggestion) {
      } else {
        config.onAutocompleteResultClick(selection)
      }
    }}
    view={SearchBoxView}
  />
)

const SearchPage = (props, state) => {

  return (
    <SearchProvider config={config}>
      <WithSearch
        mapContextToProps={({
          wasSearched,
          searchTerm,
          setSearchTerm,
          results,
        }) => ({
          wasSearched,
          searchTerm,
          setSearchTerm,
          results,
        })}
      >
        {({ wasSearched }) => (
          <ErrorBoundary>
            {wasSearched && <ResultPage {...props} />}
          </ErrorBoundary>
        )}
      </WithSearch>
    </SearchProvider>
  )
}

export default SearchPage
