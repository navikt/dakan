import * as React from 'react'
import { Select } from 'baseui/select'
import axios from 'axios'
import env from '@beam-australia/react-env'
import { GetValue } from '@dakan/ui';

const server = env('ES_SERVER')

const debounce = (fn: any, delay: any) => {
  let timeoutId: any;
  const debounced = (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debounced;
}

const buildAutocompleteRequest = (searchTerm: any) => {
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
            type: 'person'
          }
        }
      },
    },
  }
  return body
}

const getName = (tag: any, tagLabel: any) => {
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

const transformData = (data: any) => {
  let transformedData: any[] = []
  data.forEach((rawData: any) => {
    const newData = {
      id: GetValue(() => rawData.id),
      properties: {
        title: GetValue(() => rawData._source.title)
      }
    }
    transformedData.push(newData)
  })
  return transformedData
}

const SelectPerson = (props: any) => {
  const { tagOptions,
    dataId,
    dataTags,
    setDataTags,
    edgeLabel,
    tagLabel } = props

  const [options, setOptions] = React.useState([{}]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = debounce((term: any) => {
    if (!term.value) {
      setOptions([]);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      axios.post(`${server}`, JSON.stringify(buildAutocompleteRequest(term.value)), { headers: { 'content-type': 'application/json; charset=utf-8' } })
        .then((res) => {
          if (res.data && res.data['hits'] && res.data['hits']['hits']) {
            const rawData = transformData(res.data['hits']['hits'])
            const options = rawData.map((tag) => ({
              name: getName(tag, tagLabel),
              id: tag.id,
              properties: tag.properties,
            }))
            setOptions(options)
          }
          setIsLoading(false);
        }
        ).catch((e) => console.log(e))
    }, 1000);
  }, 400);

  return (
    <Select
      labelKey="name"
      valueKey="name"
      isLoading={isLoading}
      options={options}
      onChange={(tag) => {

      }}
      placeholder={props.placeholder ? props.placeholder : 'Velg'}
      maxDropdownHeight="300px"
      onInputChange={event => {
        const target = event.target;
        handleInputChange(target);
      }}
    />
  );

}
export default SelectPerson