export const GetValue = (func, fallBackValue = 'Ingen data') => {
  try {
    const value = func()
    return value === null || value === undefined ? fallBackValue : value
  } catch (e) {
    return fallBackValue
  }
}
export default GetValue
