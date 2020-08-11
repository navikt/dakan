import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useContent(id) {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {
    if (typeof response.data !== 'object') throw Error(`Error fetching content: ${id}`)
    return response.data
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${server}/nodes/${id}`)
        const data = await getData(response)
        setData(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])


  return [
    data,
    loading,
    error,
    setData
  ]
}

export default useContent
