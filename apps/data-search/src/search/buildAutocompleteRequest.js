export default function buildAutocompleteRequest(searchTerm) {
  // console.log('Autocomplete: ', searchTerm)
  const body = {
    size: 9,
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query: searchTerm['searchTerm'].toLowerCase(),
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
