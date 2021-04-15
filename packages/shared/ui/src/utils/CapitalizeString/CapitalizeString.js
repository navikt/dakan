export const CapitalizeString = (word) => {
  if (word instanceof String || typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  } else {
    return word
  }
}
export default CapitalizeString
