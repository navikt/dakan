function getValueFacet(aggregations, fieldName) {
  if (
    aggregations &&
    aggregations[fieldName] &&
    aggregations[fieldName].buckets &&
    aggregations[fieldName].buckets.length > 0
  ) {
    return [
      {
        field: fieldName,
        type: 'value',
        data: aggregations[fieldName].buckets.map((bucket) => ({
          // Boolean values and date values require using `key_as_string`
          value: bucket.key_as_string || bucket.key,
          count: bucket.doc_count,
        })),
      },
    ]
  }
}

// eslint-disable-next-line no-unused-vars
function getNestedFacet(aggregations, fieldName, itemName) {
  if (
    aggregations &&
    aggregations[fieldName][itemName] &&
    aggregations[fieldName][itemName].buckets &&
    aggregations[fieldName][itemName].buckets.length > 0
  ) {
    return [
      {
        field: fieldName,
        type: 'value',
        data: aggregations[fieldName][itemName].buckets.map((bucket) => ({
          // Boolean values and date values require using `key_as_string`
          value: bucket.key_as_string || bucket.key,
          count: bucket.doc_count,
        })),
      },
    ]
  }
}

// eslint-disable-next-line no-unused-vars
function getRangeFacet(aggregations, fieldName) {
  if (
    aggregations &&
    aggregations[fieldName] &&
    aggregations[fieldName].buckets &&
    aggregations[fieldName].buckets.length > 0
  ) {
    return [
      {
        field: fieldName,
        type: 'range',
        data: aggregations[fieldName].buckets.map((bucket) => ({
          // Boolean values and date values require using `key_as_string`
          value: {
            to: bucket.to,
            from: bucket.from,
            name: bucket.key,
          },
          count: bucket.doc_count,
        })),
      },
    ]
  }
}

export default function buildStateFacets(aggregations) {
  const format = getValueFacet(aggregations, 'format')
  //const provenance = getValueFacet(aggregations, "provenance");
  //const master = getValueFacet(aggregations,"master");
  //const category = getValueFacet(aggregations,"category");
  //const purpose = getValueFacet(aggregations,"purpose");
  //const legalbasis = getValueFacet(aggregations,"legalbasis");
  //const pii = getValueFacet(aggregations,"pii");
  const theme = getValueFacet(aggregations, 'theme')
  //const distribution= getNestedFacet(aggregations,"distribution", "format");

  const facets = {
    //...(distribution && { distribution }),
    ...(format && { format }),
    //...(provenance && { provenance }),
    //...(master && { master }),
    //...(category && { category }),
    //...(purpose && { purpose }),
    //...(legalbasis && { legalbasis }),
    //...(pii && { pii }),
    ...(theme && { theme }),
  }

  if (Object.keys(facets).length > 0) {
    return facets
  }
}
