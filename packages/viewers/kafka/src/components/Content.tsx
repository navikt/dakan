import * as React from 'react'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography';
import {
  LayoutSplit as Layout,
  LabeledContent,
  Searchbox,
  ToggleUserText,
  SingleUserText,
  Rating,
  GetValue,
  ElasticTagging,
  teamTags,
  setTeamTags,
  personTags,
  setPersonTags
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

  } = props
  const [filterFields, setFilterFields] = React.useState()
  const [filterText, setFilterText] = React.useState()

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
          left={
            <Block>
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
                <Block marginBottom="scale400">
                  <LabelMedium>
                    <b>Team navn</b>
                  </LabelMedium>
                </Block>
                <ElasticTagging
                  tagType={['naisteam', 'team']}
                  dataId={data.id}
                  dataTags={teamTags}
                  setDataTags={setTeamTags}
                  edgeLabel={'hasKafkaTeamTag'}
                  tagLabel={'name'}
                  placeholder="Velg team"
                />
              </Block>
              <Block marginBottom="scale800">
                <Block marginBottom="scale400">
                  <LabelMedium>
                    <b>Kontaktperson</b>
                  </LabelMedium>
                </Block>
                <ElasticTagging
                  tagType={['person']}
                  dataId={data.id}
                  dataTags={personTags}
                  setDataTags={setPersonTags}
                  edgeLabel={'hasKafkaPersonTag'}
                  tagLabel={['fornavn', 'etternavn']}
                  placeholder="Velg kontaktperson"
                />
              </Block>
              <ToggleUserText
                dataId={data.id}
                userTexts={comments}
                setUserTexts={setComments}
                title="Kommentar"
                edgeLabel="hasKafkaComment"
                nodeLabel="kafka_comment"
              />
            </Block>
          }
          right={
            <Block>
              {fields && (
                <React.Fragment>
                  <Block marginBottom="scale1200">
                    <Searchbox
                      placeholder="Søk i topic liste..."
                      onChange={(event: any) => {
                        setFilterText(event.target.value)
                        setFilterFields(
                          FilterFieldList(fields, event.target.value),
                        )
                      }}
                    />
                  </Block>
                  <TopicFields
                    fieldsToView={filterText ? filterFields : fields}
                    tagOptions={tagOptions}
                  />
                </React.Fragment>
              )}
            </Block>
          }
        />
      )}
    </Block>
  )
}

export default Content
