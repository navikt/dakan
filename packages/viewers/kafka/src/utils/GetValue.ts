const GetValue = (func: Function, fallbackValue = 'Ingen data') => {
  try {
    const value = func()
    return value === null || value === undefined ? fallbackValue : value
  } catch (e) {
    return fallbackValue
  }
}

export default GetValue
