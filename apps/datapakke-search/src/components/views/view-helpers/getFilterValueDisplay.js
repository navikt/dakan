import { getLocal } from './getLocal'

export default function getFilterValueDisplay(filterValue) {
  let label = 'Ukjent'
  if (!filterValue) return label
  if (filterValue.hasOwnProperty('name')) label = filterValue.name
  label = String(filterValue)

  return getLocal(label)
}
