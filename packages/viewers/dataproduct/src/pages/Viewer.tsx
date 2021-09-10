import React from 'react'
import { Metrics } from '@dakan/metrics'
import {
  useNode,
  useNodeEdges,
  useElasticSearch,
} from '@dakan/hooks'
import { Header, LoadingSpinner, ErrorPage } from '@dakan/ui'
import Dataproducts from "../components/Dataproducts";

import exampleJson from '../resources/example.json'


const Viewer = (props: any) => {
  const [
    nodeElastic,
    loadingNodeElastic,
    errorLoadingNodeElastic,
  ] = useElasticSearch(props.match.params.id)
  const [nodeGraph] = useNode(
    props.match.params.id,
  )
  const [columns] = useNodeEdges(
    props.match.params.id,
    'hasMember',
  )

  const [
    ratings,
    setRatings,
  ] = useNodeEdges(props.match.params.id, 'hasTableRating')

  const [
    comments,
    setComments,
  ] = useNodeEdges(props.match.params.id, 'hasTableComment')

  const [
    description,
    setDescription,
  ] = useNodeEdges(props.match.params.id, 'hasTableDescription')

  // const getHeader = () => (
  //   <Header
  //     config={{
  //       nav: true,
  //       about: true,
  //       showLoginButton: true,
  //     }}
  //   />
  // )

  if (props.match.params.id === 'test') {
    return <Dataproducts {...props} dataproduct={exampleJson}  />
  }


  const sortNodesByPropertyTime = (data: any) => {
    return data.sort((a: any, b: any) => {
      if (
        a.properties.date + 't' + a.properties.time <
        b.properties.date + 't' + b.properties.time
      ) {
        return 1
      }
      if (
        a.properties.date + 't' + a.properties.time >
        b.properties.date + 't' + b.properties.time
      ) {
        return -1
      }
      return 0
    })
  }

  if (errorLoadingNodeElastic && !nodeElastic) {
    return <ErrorPage layout errorMessage={'Status 204 - No content found'} />
  }

  return (
    <React.Fragment>
      {loadingNodeElastic && <LoadingSpinner />}
      {errorLoadingNodeElastic && (
        <div>{'Feil ved lasting av node fra graph database'}</div>
      )}
      {nodeElastic && (
        <React.Fragment>
          <Metrics page={nodeGraph.id} section={''} />
          <Dataproducts
            {...props}
            id={props.match.params.id}
            data={nodeElastic}
            node={nodeGraph}
            columns={columns}
            comments={
              comments &&
              comments.length > 0 &&
              sortNodesByPropertyTime(comments)
            }
            setComments={setComments}
            description={description}
            setDescription={setDescription}
            numberOfColumns={columns && columns.length}
            ratings={ratings}
            setRatings={setRatings}

          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
