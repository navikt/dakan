import * as React from 'react'
import { Block } from 'baseui/block'
import {
  LayoutSplit as Layout,
  LabeledContent,
  Searchbox,
  ToggleUserText,
  Rating
} from '@dakan/ui'

import GetValue from '../utils/GetValue'
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
                  edgeLabel="hasRating"
                  nodeLabel="kafka_rating"
                />
              </Block>
              {getTopicContent()}
              <ToggleUserText
                dataId={data.id}
                userTexts={comments}
                setUserTexts={setComments}
                title="Kommentar"
                edgeLabel="hasComment"
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
