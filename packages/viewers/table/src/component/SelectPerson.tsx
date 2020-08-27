import * as React from 'react'
import { Select } from 'baseui/select'
import axios from 'axios'
import env from '@beam-australia/react-env'

const server = env('ELASTIC_ENDPOINT')
const index = env('ELASTIC_INDEX')

const debounce = (fn: any, delay: any) => {
  let timeoutId: any;
  function debounced(...args: any[]) {
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
      },
    },
  }
  return body
}

const SelectPerson = () => {
  const [value, setValue] = React.useState({});
  const [options, setOptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleInputChange = debounce((term: any) => {
    if (!term.value) {
      setOptions([]);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      axios.post(`${server}/${index}`, JSON.stringify(buildAutocompleteRequest(term.value)), { headers: { 'content-type': 'application/json; charset=utf-8' } })
        .then((res) => {
          setOptions(res.data);
          console.log(res.data)
          setIsLoading(false);
        }
        )
    }, 1000);
  }, 400);
  return (
    <Select
      isLoading={isLoading}
      options={options}
      onChange={(tag) => setValue(tag.value)}
      onInputChange={event => {
        const target = event.target;
        handleInputChange(target);
      }}
    />
  );

}
export default SelectPerson