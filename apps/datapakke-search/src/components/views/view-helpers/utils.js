export const getFieldType = (result, field, type) => {
  if (result && field && result[field]) {
    return result[field][type]
  }
  return 'NA'
}

export const getRaw = (result, field) => {
  return getFieldType(result, field, 'raw')
}

export const getSnippet = (result, field) => {
  return getFieldType(result, field, 'snippet')
}

export const isFieldValueWrapper = (object) => {
  return (
    object && (object.hasOwnProperty('raw') || object.hasOwnProperty('snippet'))
  )
}

export const htmlEscape = (str) => {
  if (!str) return ''

  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export const getEscapedField = (result, field) => {
  // Fallback to raw values here, because non-string fields
  // will not have a snippet fallback. Raw values MUST be html escaped.
  if (result && field) {
    const safeField =
      getSnippet(result, field) || htmlEscape(getRaw(result, field))
    return Array.isArray(safeField) ? safeField.join(', ') : safeField
  }

  return 'NA'
}

export const getEscapedFields = (result) => {
  return Object.keys(result).reduce((acc, field) => {
    if (!isFieldValueWrapper(result[field])) return acc
    return { ...acc, [field]: getEscapedField(result, field) }
  }, {})
}
