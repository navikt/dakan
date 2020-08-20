import { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useNodeEdges(id, type, direction = 'out') {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {

    if (response.data && response.data === '') return {}

    if (response.data && typeof response.data !== 'object')
      throw Error('No items found')

    return response.data
  }

  useEffect(() => {
    const url = `${server}/node/${direction}/${id}/${type}`
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(url)
        const data = await getData(result)
        setData(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  return [data, loading, error, setData]
}

export default useNodeEdges
