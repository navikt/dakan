import { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('BQ_API')

export function useGoogleDatacalogMetadata(id) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const url = `${server}/lookup/${id}`
        const result = await axios.get(url)
        setData(result.data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  return [data, loading, error]
}

export default useGoogleDatacalogMetadata
