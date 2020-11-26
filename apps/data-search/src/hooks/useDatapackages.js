import { useEffect, useState } from 'react'
import runRequest from '../search/runRequest'

const query = {
  query: {
    bool: {
      should: [
        { term: { format: 'datapackage' } },
        { term: { format: 'api' } },
        { term: { format: 'term' } },
      ],
    },
  },
  size: 200,
  from: 0,
}

const checkForHits = (response) => {
  if (!response.hits) throw Error('No hits')
  return response.hits
}

export function useDatapackages() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await runRequest(query)
        const data = await checkForHits(result)
        setData(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return [data, loading, error]
}

export default useDatapackages
