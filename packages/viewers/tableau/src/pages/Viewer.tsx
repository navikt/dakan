import * as React from 'react'
import { Block } from 'baseui/block'
import env from '@beam-australia/react-env'
import { Metrics } from '@dakan/metrics'
import { Header, LoadingSpinner, ErrorPage } from '@dakan/ui'
import { useNode, useNodeEdges, useContent } from '@dakan/hooks'

import exampleJson from '../resources/example.json'
import exampleTableauViewsJson from '../resources/exampleTableuViews.json'
import Content from '../components/Content'
import exampleComments from '../resources/exampleComments.json'
import exampleTags from '../resources/exampleTags.json'
import exampleDescription from '../resources/exampleDescription.json'

const title = env('TITLE') || 'Tableau'

const Viewer = (props: any) => {
  const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(
    props.match.params.id,
  )
  const [
    ratings,
    loadingRatings,
    errorLoadingRatings,
    setRatings,
  ] = useNodeEdges(props.match.params.id, 'hasTableauRating')
  const [viewList, loadingViewList, errorLoadingViewList] = useNodeEdges(
    props.match.params.id,
    'hasMember',
  )
  const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent(
    'opplysningstype',
  )
  const [
    comments,
    loadingCommnets,
    errorLoadingComments,
    setComments,
  ] = useNodeEdges(props.match.params.id, 'hasTableauComment')

  const [
    description,
    loadingDescription,
    errorLoadingDescription,
    setDescription,
  ] = useNodeEdges(props.match.params.id, 'hasTableauDescription')

  const [
    personTags,
    loadingPersonTags,
    errorLoadingPersonTags,
    setPersonTags,
  ] = useNodeEdges(props.match.params.id, 'hasTableauPersonTag')

  const [
    teamTags,
    loadingTeamTags,
    errorLoadingTeamTags,
    setTeamTags,
  ] = useNodeEdges(props.match.params.id, 'hasTableauTeamTag')

  const getHeader = () => (
    <Header
      config={{
        brand: title,
        nav: true,
        about: true,
        showLoginButton: true,
      }}
    />
  )

  const sortNodesByPropertyTime = (data) => {
    return data.sort((a, b) => {
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

  if (props.match.params.id === 'test') {
    return (
      <Block>
        {getHeader()}
        <Content
          {...props}
          data={exampleJson}
          viewList={exampleTableauViewsJson}
          tagOptions={exampleTags}
          comments={exampleComments}
          setComments={setComments}
          description={exampleDescription}
          setDescription={setDescription}
          teamTags={teamTags}
          setTeamTags={setTeamTags}
          personTags={personTags}
          setPersonTags={setPersonTags}
        />
      </Block>
    )
  }

  if (loadingNode) {
    return (
      <Block display="flex" justifyContent="center">
        <LoadingSpinner size={96} />
      </Block>
    )
  }

  if (
    (errorLoadingNode && !Object.keys(node).length) ||
    !Object.keys(node).length
  ) {
    return (
      <ErrorPage
        header
        layout
        errorMessage={
          errorMessage ? errorMessage : 'Status 204 - No content found'
        }
      />
    )
  }

  return (
    <React.Fragment>
      <Block>
        {getHeader()}
        {node && node.properties && (
          <React.Fragment>
            <Metrics page={node.id} section={''} />
            <Content
              data={node}
              viewList={viewList}
              tagOptions={tagOptions}
              comments={
                comments &&
                comments.length > 0 &&
                sortNodesByPropertyTime(comments)
              }
              setComments={setComments}
              description={description}
              setDescription={setDescription}
              ratings={ratings}
              setRatings={setRatings}
              teamTags={teamTags}
              setTeamTags={setTeamTags}
              personTags={personTags}
              setPersonTags={setPersonTags}
            />
          </React.Fragment>
        )}
      </Block>
    </React.Fragment>
  )
}
export default Viewer
