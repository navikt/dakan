import * as React from 'react'
import { Block } from 'baseui/block'
import {
  LayoutSplit as Layout,
  LabeledContent,
  Searchbox,
  ToggleComments,
} from '@dakan/ui'
import env from '@beam-australia/react-env'

import GetValue from '../utils/GetValue'
import FilterFieldList from '../utils/FilterFieldList'
import TopicFields from './TopicFields'

const graph_server = env('GRAPH_SERVER')

const Content = (props: any): JSX.Element => {
  const {
    data,
    fields,
    tagOptions,
    numberOfFields,
    comments,
    setComments,
    clientUser,
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
              {getTopicContent()}
              <ToggleComments
                dataId={data.id}
                comments={comments}
                setComments={setComments}
                clientUser={clientUser}
                server={graph_server}
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
                    clientUser={clientUser}
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
