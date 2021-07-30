import React from 'react'
import { Block } from 'baseui/block'
import { Metrics } from '@dakan/metrics'
import {
  useNode,
  useNodeEdges,
  useContent,
  useElasticSearch,
} from '@dakan/hooks'
import { Header, LoadingSpinner, ErrorPage } from '@dakan/ui'

import Content from '../components/Content'

import exampleJson from '../resources/example.json'
import exampleColumnJson from '../resources/exampleColumn.json'
import exampleTags from '../resources/exampleTags.json'
import exampleComments from '../resources/exampleComments.json'
import exampleDescription from '../resources/exampleDescription.json'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode] = useElasticSearch(
    props.match.params.id,
  )
  //const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(props.match.params.id);
  const [columns, loadingColumns, errorLoadingColumns] = useNodeEdges(
    props.match.params.id,
    'hasMember',
  )
  const [tagOptions, loadingtagOptions, errorLoadingtagOptions] =
    useContent('opplysningstype')
  const [ratings, loadingRatings, errorLoadingRatings, setRatings] =
    useNodeEdges(props.match.params.id, 'hasTableRating')
  const [comments, loadingCommnets, errorLoadingComments, setComments] =
    useNodeEdges(props.match.params.id, 'hasTableComment')

  const [
    description,
    loadingDescription,
    errorLoadingDescription,
    setDescription,
  ] = useNodeEdges(props.match.params.id, 'hasTableDescription')

  const [personTags, loadingPersonTags, errorLoadingPersonTags, setPersonTags] =
    useNodeEdges(props.match.params.id, 'hasTablePersonTag')

  const [teamTags, loadingTeamTags, errorLoadingTeamTags, setTeamTags] =
    useNodeEdges(props.match.params.id, 'hasTableTeamTag')

  const getHeader = () => (
    <Header
      config={{
        nav: true,
        about: true,
        showLoginButton: true,
      }}
    />
  )

  if (props.match.params.id === 'test') {
    return (
      <Block>
        {getHeader()}
        <Content
          {...props}
          data={exampleJson}
          columns={exampleColumnJson}
          tagOptions={exampleTags}
          numberOfColumns={exampleColumnJson.length}
          comments={exampleComments}
          description={exampleDescription}
          setComments={setComments}
          setDescription={setDescription}
          personTags={personTags}
          setPersonTags={setPersonTags}
          teamTags={teamTags}
          setTeamTags={setTeamTags}
        />
      </Block>
    )
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

  if (errorLoadingNode && !node) {
    return <ErrorPage layout errorMessage={'Status 204 - No content found'} />
  }

  return (
    <React.Fragment>
      {loadingNode && <LoadingSpinner />}
      {errorLoadingNode && (
        <div>{'Feil ved lasting av node fra graph database'}</div>
      )}
      {node && (
        <React.Fragment>
          <Metrics page={node.id} section={''} />
          <Content
            {...props}
            id={props.match.params.id}
            data={node}
            columns={columns}
            tagOptions={tagOptions}
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
            personTags={personTags}
            setPersonTags={setPersonTags}
            teamTags={teamTags}
            setTeamTags={setTeamTags}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Viewer
