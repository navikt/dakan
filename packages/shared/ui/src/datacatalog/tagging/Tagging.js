import * as React from 'react'
import { Select } from 'baseui/select'
import { VARIANT } from 'baseui/tag'
import { Block } from 'baseui/block'
import axios from 'axios'
import Cookies from 'js-cookie'
import env from '@beam-australia/react-env'

import { Tag } from '../../components/tag/Tag'
import GetValue from '../../utils/GetValue/GetValue'
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized'

const graph_server = env('GRAPH_SERVER')
const es_server = env('ES_SERVER')

const getName = (tag, tagLabel) => {
  if (Array.isArray(tagLabel)) {
    let name = ''
    tagLabel.forEach((label) => {
      name += GetValue(() => tag.properties[label])
      name += ' '
    })
    const finalName = name.slice(0, -1)
    return finalName
  } else {
    return GetValue(() => tag.properties[tagLabel])
  }
}

const addTag = (value, dataTags, setDataTags, dataId, edgeLabel) => {
  const tokenId = Cookies.get('ClientToken')
  const newTag = value[0]
  const newTags = dataTags && Array.isArray(dataTags) ? [...dataTags] : []

  newTags.unshift(newTag)

  const tagPayload = [
    {
      outV: dataId,
      inV: newTag.id,
      label: edgeLabel,
    },
  ]

  axios
    .put(`${graph_server}/edge`, tagPayload, {
      headers: { 'JWT-Token': tokenId },
    })
    .then(() => setDataTags(newTags))
    .catch((e) => console.log(e))
}

const DataTags = (props) => {
  const { dataTags, setDataTags, dataId, tagLabel } = props

  const deleteTag = (index, tagId) => {
    const tokenId = Cookies.get('ClientToken')
    const newTags = dataTags && Array.isArray(dataTags) ? [...dataTags] : []
    newTags.splice(index, 1)
    axios
      .delete(`${graph_server}/edge`, {
        params: { n1: dataId, n2: tagId },
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => setDataTags(newTags))
      .catch((e) => console.log(e))
  }
  const getTags = () => {
    return dataTags.map((tag, index) => {
      return (
        <React.Fragment>
          {tag && tag.properties && (
            <Tag
              key={'tag_' + index}
              variant={VARIANT.outlined}
              onActionClick={() =>
                CheckIfAuthorized(() => deleteTag(index, tag.id))
              }
            >
              {getName(tag, tagLabel)}
            </Tag>
          )}
        </React.Fragment>
      )
    })
  }
  return (
    <Block>
      {dataTags && dataTags.length > 0 && (
        <Block marginTop="scale300">
          <Block marginTop="scale300">{getTags()}</Block>
        </Block>
      )}
    </Block>
  )
}

export const ElasticTagging = (props) => {
  const { tagType, dataId, dataTags, setDataTags, edgeLabel, tagLabel } = props

  const [options, setOptions] = React.useState([{}])
  const [isLoading, setIsLoading] = React.useState(false)

  const debounce = (fn, delay) => {
    let timeoutId
    const debounced = (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        fn(...args)
      }, delay)
    }
    return debounced
  }

  const buildAutocompleteRequest = (searchTerm) => {
    console.log('Autocomplete: ', searchTerm)
    const body = {
      size: 9,
      query: {
        bool: {
          must: [
            {
              multi_match: {
                query: searchTerm.toLowerCase(),
                type: 'best_fields',
                fields: [
                  'title^20',
                  'title.search^6',
                  'decription^2',
                  'description.search',
                ],
              },
            },
          ],
          filter: {
            term: {
              type: tagType,
            },
          },
        },
      },
    }
    return body
  }

  const transformData = (data) => {
    let transformedData = []
    data.forEach((rawData) => {
      const newData = {
        id: GetValue(() => rawData._id),
        name: GetValue(() => rawData._source.title)
      }
      transformedData.push(newData)
    })
    return transformedData
  }

  const handleInputChange = debounce((term) => {
    if (!term.value) {
      setOptions([])
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      axios
        .post(
          `${es_server}`,
          JSON.stringify(buildAutocompleteRequest(term.value)),
          { headers: { 'content-type': 'application/json; charset=utf-8' } },
        )
        .then((res) => {
          if (res.data && res.data['hits'] && res.data['hits']['hits']) {
            const options = transformData(res.data['hits']['hits'])
            setOptions(options)
          }
          setIsLoading(false)
        })
        .catch((e) => console.log(e))
    }, 1000)
  }, 400)

  return (
    <Block>
      <Select
        labelKey="name"
        valueKey="name"
        isLoading={isLoading}
        options={options}
        onChange={(tag) =>
          CheckIfAuthorized(() =>
            addTag(tag.value, dataTags, setDataTags, dataId, edgeLabel),
          )
        }
        placeholder={props.placeholder ? props.placeholder : 'Velg'}
        maxDropdownHeight="300px"
        onInputChange={(event) => {
          const target = event.target
          handleInputChange(target)
        }}
      />
      <DataTags dataTags={dataTags} setDataTags={setDataTags} dataId={dataId} tagLabel={tagLabel} />
    </Block>
  )
}

export const Tagging = (props) => {
  const {
    tagOptions,
    dataId,
    dataTags,
    setDataTags,
    edgeLabel,
    tagLabel,
  } = props

  const getOptions = () => {
    const options = tagOptions.map((tag) => ({
      name: getName(tag, tagLabel),
      id: tag.id,
      properties: tag.properties,
    }))
    return (
      <Select
        options={options}
        labelKey="name"
        valueKey="name"
        onChange={(tag) =>
          CheckIfAuthorized(() =>
            addTag(tag.value, dataTags, setDataTags, dataId, edgeLabel),
          )}
        placeholder={props.placeholder ? props.placeholder : 'Velg'}
        maxDropdownHeight="300px"
      />
    )
  }

  return (
    <Block>
      {tagOptions && getOptions()}
      <DataTags dataTags={dataTags} setDataTags={setDataTags} dataId={dataId} tagLabel={tagLabel} />
    </Block>
  )
}
export default Tagging
