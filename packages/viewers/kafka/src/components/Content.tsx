import * as React from 'react'
import { Block } from 'baseui/block'
import { KIND } from 'baseui/button'
import Cookies from 'js-cookie'
import {
  LayoutSplit as Layout,
  LabeledContent,
  Searchbox,
  ToggleUserText,
  SingleUserText,
  Rating,
  GetValue,
  ElasticTagging,
  Button,
  EditIcon,
  CheckIfAuthorized,
} from '@dakan/ui'

import FilterFieldList from '../utils/FilterFieldList'
import TopicFields from './TopicFields'

const Content = (props: any): JSX.Element => {
  const {
    data,
    fields,
    tagOptions,
    numberOfFields,
    comments,
    setComments,
    description,
    setDescription,
    teamTags,
    setTeamTags,
    personTags,
    setPersonTags,
  } = props
  const [filterFields, setFilterFields] = React.useState()
  const [filterText, setFilterText] = React.useState()
  const [isEditMode, setIsEditMode] = React.useState(false)

  const expiresIn5mins = 0.0035

  React.useEffect(() => {
    const editModeActivated = Cookies.get('KafkaEditModeActivated')
    const clientUser = Cookies.get('ClientUser')
    const tokenId = Cookies.get('ClientToken')
    if (editModeActivated && clientUser && tokenId) {
      setIsEditMode(true)
    }
    Cookies.remove('KafkaEditModeActivated')
  }, [])

  const getTopicContent = () => {
    return (
      <React.Fragment>
        {data && (
          <Block>
            <LabeledContent description="Beskrivelse" list>
              {GetValue(() => data.topic_description)}
            </LabeledContent>
            <Block marginTop="scale800" marginBottom="scale800">
              <SingleUserText
                dataId={data.id}
                userText={description}
                setUserText={setDescription}
                title="Utvidet beskrivelse"
                edgeLabel="hasKafkaDescription"
                nodeLabel="kafka_description"
                isEditMode={isEditMode}
              />
            </Block>
            <Block flex="1">
              <LabeledContent description="Antall felter" list>
                {numberOfFields}
              </LabeledContent>
            </Block>
          </Block>
        )}
      </React.Fragment>
    )
  }

  return (
    <Block>
      {data && data.properties && (
        <Layout
          headingLabel="Kafka topic"
          headingText={data.properties.topic_name}
          toolbar={
            <Block display="flex" flex="1" justifyContent="flex-end">
              <div role="form" aria-label="Rediger side innhold">
                <Button
                  role="switch"
                  aria-checked={isEditMode}
                  kind={KIND.secondary}
                  startEnhancer={<EditIcon />}
                  startEnhancerHover={<EditIcon fill="white" />}
                  onClick={() => {
                    Cookies.set('KafkaEditModeActivated', 'true', {
                      expires: expiresIn5mins,
                    })
                    if (isEditMode === true) {
                      Cookies.remove('KafkaEditModeActivated')
                    }
                    CheckIfAuthorized(() => setIsEditMode(!isEditMode))
                  }}
                >
                  Rediger innhold
              </Button>
              </div>
            </Block>
          }
          left={
            <div role="main">
              <Block marginBottom="scale800" marginTop="-20px">
                <Rating
                  ratings={props.ratings}
                  setRatings={props.setRatings}
                  dataId={props.data.id}
                  edgeLabel="hasKafkaRating"
                  nodeLabel="kafka_rating"
                />
              </Block>
              {getTopicContent()}
              <Block marginBottom="scale800">
                <ElasticTagging
                  header="Team navn"
                  tagType={['naisteam', 'team']}
                  dataId={data.id}
                  dataTags={teamTags}
                  setDataTags={setTeamTags}
                  edgeLabel={'hasKafkaTeamTag'}
                  tagLabel={'name'}
                  placeholder="Søk og legg til team"
                  isEditMode={isEditMode}
                />
              </Block>
              <Block marginBottom="scale800">
                <ElasticTagging
                  header="Kontaktperson"
                  tagType={['person']}
                  dataId={data.id}
                  dataTags={personTags}
                  setDataTags={setPersonTags}
                  edgeLabel={'hasKafkaPersonTag'}
                  tagLabel={['fornavn', 'etternavn']}
                  placeholder="Søk og legg til kontaktperson"
                  isEditMode={isEditMode}
                />
              </Block>
              <ToggleUserText
                dataId={data.id}
                userTexts={comments}
                setUserTexts={setComments}
                title="Kommentar"
                edgeLabel="hasKafkaComment"
                nodeLabel="kafka_comment"
                isEditMode={isEditMode}
              />
            </div>
          }
          right={
            <div role="complementary">
              {fields && (
                <React.Fragment>
                  <Block marginBottom="scale1200">
                    <div role="search">
                      <Searchbox
                        aria-label="Søk i topic liste."
                        placeholder="Søk i topic liste"
                        onChange={(event: any) => {
                          setFilterText(event.target.value)
                          setFilterFields(
                            FilterFieldList(fields, event.target.value),
                          )
                        }}
                      />
                    </div>
                  </Block>
                  <div role="list">
                    <TopicFields
                      isEditMode={isEditMode}
                      fieldsToView={filterText ? filterFields : fields}
                      tagOptions={tagOptions}
                    />
                  </div>
                </React.Fragment>
              )}
            </div>
          }
        />
      )}
    </Block>
  )
}

export default Content
