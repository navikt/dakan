import * as React from 'react'
import { Block } from 'baseui/block'
import { Tagging, Label } from '@dakan/ui'
import env from '@beam-australia/react-env'
import { useNodeEdges } from '@dakan/hooks'

import GetValue from '../utils/GetValue'

const server = env('GRAPH_SERVER')

const FieldViewer = (props: any): JSX.Element => {
  const { field, tagOptions, clientUser } = props
  const [tags, loading, error, setTags] = useNodeEdges(field.id, 'hasKafkaFieldTag')

  if (error) {
    console.log(error)
  }

  return (
    <React.Fragment>
      <Block marginBottom="scale1200">
        {field.properties && (
          <Block>
            <Block>
              <Label>{GetValue(() => field.properties.field_name)}</Label>
            </Block>
            <Block display={['block', 'flex']} marginBottom="scale300">
              <Block flex="1">
                <Block flex="1" marginTop="scale600" marginBottom="scale600">
                  <Tagging
                    isLoading={loading}
                    dataId={field.id}
                    tagOptions={tagOptions}
                    serverUrl={server}
                    dataTags={tags}
                    setDataTags={setTags}
                    clientUser={clientUser}
                    edgeLabel="hasKafkaFieldTag"
                    tagLabel="name"
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        )}
      </Block>
    </React.Fragment>
  )
}

export default FieldViewer
