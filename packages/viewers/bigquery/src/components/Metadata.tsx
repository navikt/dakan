import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink as Link } from 'baseui/link'
import { LabeledContent } from '@dakan/ui'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'

import { BigQueryLink } from './BigQueryLink'
import { GoogleDataCatalogLink } from './GoogleDataCatalogLink'

let ITEMS = [
  { item: 'pii', label: 'persondata', format: 'bool' },
  { item: 'publisher', label: 'utgiver' },
  { item: 'license', label: 'lisens' },
  { item: 'language', label: 'språk' },
  { item: 'periodicity', label: 'oppdateres' },
  { item: 'temporal', label: 'periode' },
  { item: 'author', label: 'forfatter' },
  { item: 'contactPoint', label: 'kontakt' },
  { item: 'spatial', label: 'område' },
  { item: 'keyword', label: 'nøkkelord' },
  { item: 'repo', format: 'link' },
  { item: 'notebook', format: 'link' },
  { item: 'issued', label: 'utgitt', format: 'date' },
  { item: 'modified', label: 'oppdatert', format: 'date' },
]

const get = (func: any, fallbackValue: any) => {
  try {
    const value = func()
    return value === null || value === undefined ? fallbackValue : value
  } catch (e) {
    return fallbackValue
  }
}

const Metadata = ({ item, id }) => {
  const [link, setLink] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    if (item.id) {
      setLink(<GoogleDataCatalogLink dataset_id={item.id} />)
    }
  }, [item.id])

  const getMetadata = (): JSX.Element[] => {
    return ITEMS.map((entry: any, i: number) => {
      let value = get(() => item[entry.item], '')
      try {
        if (value && typeof value === 'object') {
          if (entry.format && entry.format === 'link') {
            value = <Link href={value['url']}>{value['name']}</Link>
          } else if (entry.item && entry.item === 'temporal') {
            if (value.from && value.to) {
              const fromDate = new Date(value.from)
              const toDate = new Date(value.to)
              if (
                typeof fromDate.getMonth === 'function' &&
                typeof toDate.getMonth === 'function'
              ) {
                value =
                  format(fromDate, 'yyyy-MM-dd') +
                  ' - ' +
                  format(toDate, 'yyyy-MM-dd')
              }
            }
          } else {
            value = Object.keys(value).map((key) => {
              return <div key={`metadata_object_${i}_${key}`}>{value[key]}</div>
            })
          }
        }
        if (value && entry.format && entry.format === 'date') {
          const date = new Date(value)
          if (typeof date.getMonth === 'function') {
            value = format(date, 'yyyy-MM-dd')
          }
        }
        if (value && entry.format && entry.format === 'link') {
          value = <Link href={value}>{value}</Link>
        }
        if (value && entry.format && entry.format === 'bool') {
          value = value ? 'Ja' : 'Nei'
        }
      } catch (err) {
        console.log('Metadata error: ', value)
      }
      return (
        <Block key={`metadata_block_${i}`} marginBottom="scale800">
          {value && (
            <LabeledContent
              key={`metadata_block_content_${i}`}
              aria-label="label"
              description={entry.label ? entry.label : entry.item}
            >
              {value}
            </LabeledContent>
          )}
        </Block>
      )
    })
  }

  if (!item) return null

  return (
    <div role="main">
      {item.id && (
        <Block marginBottom="scale800">
          <Block marginBottom="scale800">
            <BigQueryLink dataset_id={item.id} />
          </Block>
          <Block marginBottom="scale800">{link}</Block>
        </Block>
      )}
      {getMetadata()}
    </div>
  )
}

export default Metadata
