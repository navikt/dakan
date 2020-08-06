import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function useNode(server, id) {
  const [node, setNode] = React.useState([])
  const [members, setMembers] = React.useState([])
  const [comments, setComments] = React.useState([])
  const [loadingNode, setLoadingNode] = useState(false)
  const [loadingMembers, setLoadingMembers] = useState(false)
  const [loadingCommits, setLoadingComments] = useState(false)
  const [error, setError] = useState(false)

  const HandleAxiosError = (error, setError) => {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
      setError(`${error.response.status} ${error.response.statusText}`)
    } else {
      console.log(error)
      console.log(error.status)
      console.log(error.message)
      setError(true)
    }
  }

  const handleGetMembers = (response) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setMembers(response.data)
    } else {
      setError(true)
    }
  }

  const handleGetComments = async (response) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setComments(response.data)
    } else {
      setError(true)
    }
  }

  const getMembers = (node) => {
    setLoadingMembers(true)
    axios
      .get(`${server}/node/out/${node.id}/hasMember`)
      .then(handleGetMembers)
      .catch((e) => HandleAxiosError(e, setError))
    setLoadingMembers(false)
  }

  const getComments = (node) => {
    setLoadingComments(true)
    axios
      .get(`${server}/node/out/${node.id}/hasComment`)
      .then(handleGetComments)
      .catch((e) => HandleAxiosError(e, setError))
    setLoadingComments(false)
  }

  const handleNode = (response) => {
    const node = response.data
    if (typeof node !== 'object' || node == null || !node.id)
      throw Error('Error fetching node')
    setNode(node)
    getComments(node)
    getMembers(node)
  }

  useEffect(
    (id) => {
      const fetchData = async () => {
        setLoadingNode(true)
        try {
          const response = await axios.get(`${server}/node/${id}`)
          handleNode(response)
        } catch (e) {
          setError(true)
        }
        setLoadingNode(false)
      }
      fetchData()
    },
    [id],
  )

  return [
    node,
    members,
    comments,
    loadingNode,
    loadingMembers,
    loadingCommits,
    error,
  ]
}

export default useNode
