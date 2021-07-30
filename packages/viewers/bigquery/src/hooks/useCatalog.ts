import { useEffect, useState } from 'react'
import axios from 'axios'

export function useCatalog(url, dataset_id) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(url)
        setData(result.data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  return [data, loading, error]
}

export default useCatalog
