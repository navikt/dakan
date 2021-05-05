import { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('BQ_API')

export function useBigQueryAuditLogs(dataset_id) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(`${server}/audit?dataset_id=${dataset_id}`)
        setData(result.data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [dataset_id])

  return [data, loading, error]
}

export default useBigQueryAuditLogs
