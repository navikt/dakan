import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useContent(id) {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = (response) => {
    if (typeof response.data.data !== 'object')
      throw Error(`Error fetching content: ${id}`)
    return response.data.data
  }

  const get_nodes_by_label = (label, api) => {
    const nodes = []
    let page = 1
    let has_next_page = true
    while(has_next_page){
      const response = await axios.get(`${api}/nodes/${label}`)
      const data = await getData(response)
      nodes.push(...data)
    }
    setData(nodes)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        get_nodes_by_label(id, server)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  return [data, loading, error, setData]
}

export default useContent
