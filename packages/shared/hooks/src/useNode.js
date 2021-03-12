import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useNode(id) {
  const [node, setNode] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getData = (response) => {
    if (response.data && typeof response.data !== 'object')
      throw Error('Error fetching node')
    if (response.data && typeof response.data === 'object' && !Object.keys(response.data).length) {
      throw Error('Status 204 - No content found')
    }
    return response.data
  }

  useEffect(() => {
    const url = `${server}/node/${id}`
    // console.log('get node: ', url)
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(url)
        const data = await getData(response)
        setNode(data)
      } catch (e) {
        setError(true)
        setErrorMessage(JSON.stringify(e))
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  return [node, loading, error, errorMessage]
}

export default useNode
