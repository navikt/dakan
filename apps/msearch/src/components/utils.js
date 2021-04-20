import fetch from 'unfetch'
import qs from 'qs'
import amplitude from 'amplitude-js'

// Search with msearch to elasticsearch instance
// Todo reject.
export function msearch(url, msearchData, headers = {}) {
    return new Promise(async (resolve, reject) => {
        headers = {
            ...{
                Accept: 'application/json',
                'Content-Type': 'application/x-ndjson',
            },
            ...headers,
        }
        const body = msearchData.reduce((acc, val) => {
            const [p, q] = [{ preference: val.id }, val.query].map(
                JSON.stringify
            )
            return `${acc}${p}\n${q}\n`
        }, '')
        const rawResponse = await fetch(`${url}`, {
            method: 'POST',
            headers,
            body,
        })
        const response = await rawResponse.json()
        resolve(response)
    })
}

export function getFilterValueDisplay(filterValue) {
    let label = 'Ukjent'
    if (!filterValue) return label
    if (filterValue.hasOwnProperty('name')) label = filterValue.name
    label = String(filterValue)

    return getLocal(label)
}

export function getLocal(label) {
    if (label === 'datapackage') return 'Datapakke'
    if (label === 'api' || label === 'API') return 'API'
    if (label === 'begrep') return 'Begrep'
    if (label === 'egg') return 'Parquet'
    if (label === 'parquet') return 'Parquet'
    if (label === 'bigquery') return 'BigQuery'
    if (label === 'godkjent_begrep') return 'Godkjent begrep'
    if (label === 'purpose') return 'Formål'
    if (label === 'pii-type') return 'Opplysningstype'
    if (label === 'opplysningstype') return 'Opplysningstype'
    if (label === 'kafka') return 'Datastrøm'
    if (label === 'tabell') return 'Oracle/PG'
    if (label === 'kafka_topic') return 'Kafka'
    if (label === 'tableau') return 'Tableau'
    if (label === 'person') return 'Person'
    if (label === 'NaisApp') return 'Nais App'
    if (label === 'NaisTeam') return 'Nais Team'
    if (label === 'office') return 'Kontor'
    if (label === 'ProductArea') return 'Produktområde'
    if (label === 'team') return 'Team'
    if (label === 'keyword') return 'Stikkord'
    if (label === 'format') return 'Format'
    if (label === 'creator.name') return 'Forfatter'
    if (label === 'provenance') return 'Opprinnelse'

    return label
}

export function search(url, searchData, headers = {}) {
    return new Promise(async (resolve, reject) => {
        headers = {
            ...{
                Accept: '*/*',
                'Content-Type': 'application/json; encoding=utf-8',
            },
            ...headers,
        }
        // console.log('headers', headers)
        const body = JSON.stringify(searchData.query)
        // console.log('body', JSON.stringify(body))
        const rawResponse = await fetch(url, { method: 'POST', headers, body })
        // TODO error handling
        // console.log('raw', rawResponse)
        const response = await rawResponse.json()
        // console.log('response', response)
        resolve(response)
    })
}

// Build a query from a Map of queries
export function queryFrom(queries) {
    return {
        bool: {
            must:
                queries.size === 0
                    ? { match_all: {} }
                    : Array.from(queries.values()),
        },
    }
}

// Convert fields to term queries
export function toTermQueries(fields, selectedValues) {
    const queries = []
    for (let i in fields) {
        for (let j in selectedValues) {
            queries.push({ term: { [fields[i]]: selectedValues[j] } })
        }
    }
    return queries
}

export function fromUrlQueryString(str) {
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

export function toUrlQueryString(params) {
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

export function logFilterUseToAmplitude(value, label) {
    const filterValue = value.toLowerCase().split(' ').join('_')
    const eventProperty = {
        filter: filterValue,
        type: label.toLowerCase(),
    }
    amplitude.getInstance().logEvent('filter-valg', eventProperty)
}

const resolved = Promise.resolve()

export const defer = (f) => {
    resolved.then(f)
}
