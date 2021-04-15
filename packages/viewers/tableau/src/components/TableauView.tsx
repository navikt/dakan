import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import { LabelMedium, LabelLarge } from 'baseui/typography'
import env from '@beam-australia/react-env'
import { Tagging, GetValue } from '@dakan/ui'
import { useNodeEdges } from '@dakan/hooks'

const server = env('GRAPH_SERVER')

const TableauView = (props: any) => {
  const { view, tagOptions, clientUser, isEditMode } = props
  const [tags, loading, error, setTags] = useNodeEdges(
    view.id,
    'hasTableauViewTag',
  )

  if (error) {
    console.log(error)
  }

  return (
    <div role="listitem">
      {view.properties && (
        <Block marginBottom="scale1200">
          <Block>
            <Block>
              <StyledLink href={GetValue(() => view.properties.contentUrl)}>
                <LabelLarge>
                  <b>{GetValue(() => view.properties.view_name)}</b>
                </LabelLarge>
              </StyledLink>
            </Block>
            <StyledLink
              title={GetValue(() => view.properties.view_name)}
              href={GetValue(() => view.properties.contentUrl)}
            >
              <img
                src={GetValue(() => view.properties.preview)}
                alt={`Graf til ${GetValue(() => view.properties.view_name)}`}
                width="300px"
                height="200px"
              />
            </StyledLink>
          </Block>
          <Block marginTop="scale600" marginBottom="scale600">
            <Tagging
              header="Opplysningstype"
              dataId={view.id}
              tagOptions={tagOptions}
              dataTags={tags}
              setDataTags={setTags}
              edgeLabel="hasTableauViewTag"
              tagLabel="name"
              placeholder="Søk og legg til opplysningstype"
              isEditMode={isEditMode}
            />
          </Block>
        </Block>
      )}
    </div>
  )
}

export default TableauView
