import * as React from 'react'
import { Block } from 'baseui/block'
import { Tagging, Label, GetValue } from '@dakan/ui'
import env from '@beam-australia/react-env'
import { useNodeEdges } from '@dakan/hooks'

const server = env('GRAPH_SERVER')

const FieldViewer = (props: any): JSX.Element => {
  const { field, tagOptions, clientUser } = props
  const [tags, loading, error, setTags] = useNodeEdges(
    field.id,
    'hasKafkaFieldTag',
  )

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
                    dataId={field.id}
                    tagOptions={tagOptions}
                    dataTags={tags}
                    setDataTags={setTags}
                    edgeLabel="hasKafkaFieldTag"
                    tagLabel="name"
                    placeholder="Velg opplysningstype"
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
