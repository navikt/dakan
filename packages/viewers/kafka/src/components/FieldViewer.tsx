import * as React from 'react'
import { Block } from 'baseui/block'
import { Tagging, Label, GetValue } from '@dakan/ui'
import env from '@beam-australia/react-env'
import { useNodeEdges } from '@dakan/hooks'
import { LabelMedium, LabelLarge } from 'baseui/typography'

const server = env('GRAPH_SERVER')

const FieldViewer = (props: any): JSX.Element => {
  const { field, tagOptions, clientUser, isEditMode } = props
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
              <LabelLarge>
                <b>{GetValue(() => field.properties.field_name)}</b>
              </LabelLarge>
            </Block>
            <Block display={['block', 'flex']} marginBottom="scale300">
              <Block flex="1">
                <Block flex="1" marginTop="scale600" marginBottom="scale600">
                  <Tagging
                    header="Opplysningstype"
                    dataId={field.id}
                    tagOptions={tagOptions}
                    dataTags={tags}
                    setDataTags={setTags}
                    edgeLabel="hasKafkaFieldTag"
                    tagLabel="name"
                    placeholder="Søk og legg til opplysningstype"
                    isEditMode={isEditMode}
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
