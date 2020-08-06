import { useEffect, useState } from 'react'
import axios from 'axios'

export function useNodeEdges(server, id, type) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {
    if (typeof response.data !== 'object') throw Error('No items found')
    return response.data
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(`${server}/node/out/${id}/${type}`)
        const data = await getData(result)
        setData(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  return [data, loading, error]
}

export default useNodeEdges
