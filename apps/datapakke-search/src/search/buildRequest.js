import buildRequestFilter from './buildRequestFilter'

import env from '@beam-australia/react-env'

const baseconfig = env('CONFIG')
//console.log(baseconfig)
const facets = JSON.parse(baseconfig).facets
//console.log(JSON.parse(baseconfig).facets)
const filters = JSON.parse(baseconfig).filters

function buildFrom(current, resultsPerPage) {
  if (!current || !resultsPerPage) return
  return (current - 1) * resultsPerPage
}

function buildSort(sortDirection, sortField) {
  if (sortDirection && sortField) {
    return [{ [`${sortField}`]: sortDirection }]
  }
}

function buildMatch(searchTerm) {
  // if searchTerm ? searchTerm = _.merge(searchTerm, { match: { type: "datapackage" } })
  return searchTerm
    ? [{
      multi_match: {
        query: searchTerm,
        type: 'best_fields',
        fields: [
          'title^20',
          'decription^6',
          'title.search^2',
          'description.search',
        ],
      },
    },
    { match: { type: "datapackage" } }
    ]
    : { match: { type: "datapackage" } }
}

/*

  Converts current application state to an Elasticsearch request.

  When implementing an onSearch Handler in Search UI, the handler needs to take the
  current state of the application and convert it to an API request.

  For instance, there is a "current" property in the application state that you receive
  in this handler. The "current" property represents the current page in pagination. This
  method converts our "current" property to Elasticsearch's "from" parameter.

  This "current" property is a "page" offset, while Elasticsearch's "from" parameter
  is a "item" offset. In other words, for a set of 100 results and a page size
  of 10, if our "current" value is "4", then the equivalent Elasticsearch "from" value
  would be "40". This method does that conversion.

  We then do similar things for searchTerm, filters, sort, etc.
*/
export default function buildRequest(state, facets) {
  const {
    current,
    filters,
    resultsPerPage,
    searchTerm,
    sortDirection,
    sortField,
  } = state

  const sort = buildSort(sortDirection, sortField)
  const match = buildMatch(searchTerm)
  const size = resultsPerPage
  const from = buildFrom(current, resultsPerPage)
  const filter = buildRequestFilter(filters)

  // Dynamic values based on current Search UI state
  // --------------------------
  // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/full-text-queries.html
  let query = {
    bool: {
      must: match,
    },
  }

  if (filters && filters.length > 0) {
    query = {
      bool: {
        must: match,
        ...(filter && { filter }),
      },
    }
  }

  const aggs = {
    type: { terms: { field: 'type.keyword', size: 100, min_doc_count: 0 } },
    format: { terms: { field: 'format.keyword', size: 100 } },
    //provenance: { terms: { field: "provenance.keyword", size: 30 } },
    //category: { terms: { field: "category.keyword", size: 30 }},
    theme: { terms: { field: 'theme.keyword', size: 100 } },
  }

  const body = {
    // Static query Configuration
    // --------------------------
    // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-highlighting.html
    highlight: {
      boundary_scanner_locale: 'no-NO',
      fragment_size: 200,
      number_of_fragments: 1,
      fields: {
        title: {},
        description: {},
      },
    },
    //https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-source-filtering.html#search-request-source-filtering
    aggs: aggs,

    query: query,

    // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-sort.html
    ...(sort && { sort }),
    // https://www.elastic.co/guide/en/elasticsearch/reference/7.x/search-request-from-size.html
    ...(size && { size }),
    ...(from && { from }),
  }

  return body
}
