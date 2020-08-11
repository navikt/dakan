import React, { useEffect, useState } from 'react'
import env from '@beam-australia/react-env'
import axios from 'axios'

const server = env('GRAPH_SERVER')

export function useTags(id) {
  const [tags, setTags] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(`${server}/node/out/${id}/hasTag`)
        const data = await getData(result)
        setData(data)
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])


  return [tags, loading, error, setTags]
}

export default useTags
