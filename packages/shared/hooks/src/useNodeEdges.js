import { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useNodeEdges(id, type) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {
    if (response.data && typeof response.data !== 'object') throw Error('No items found')
    return response.data
  }

  useEffect(() => {
    const url = `${server}/node/out/${id}/${type}`
    console.log('get node edges: ', url)
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
