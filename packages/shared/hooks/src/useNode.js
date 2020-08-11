import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useNode(id) {
  const [node, setNode] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {
    if (typeof response.data !== 'object') throw Error('Error fetching node')
    return response.data
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${server}/node/${id}`)
        const data = await getData(response)
        setNode(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])


  return [
    node,
    loading,
    error,
  ]
}

export default useNode
