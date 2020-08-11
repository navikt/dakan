import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import { LabelMedium } from 'baseui/typography'
import env from '@beam-australia/react-env'
import { SelectOpplysningstype } from '@dakan/ui'
import { useNodeEdges } from '@dakan/hooks'

import GetValue from '../utils/GetValue'

const server = env('GRAPH_SERVER')

const TableauView = (props: any) => {
  const { view, tagOptions, clientUser } = props
  const [tags, loading, error, setTags] = useNodeEdges(view.id, 'hasTag')

  if (error) {
    console.log(error)
  }

  return (
    <React.Fragment>
      {view.properties && (
        <Block marginBottom="scale1200">
          <Block>
            <Block>
              <StyledLink href={GetValue(() => view.properties.contentUrl)}>
                <LabelMedium>
                  {GetValue(() => view.properties.view_name)}
                </LabelMedium>
              </StyledLink>
            </Block>
            <StyledLink href={GetValue(() => view.properties.contentUrl)}>
              <img
                src={GetValue(() => view.properties.preview)}
                alt=""
                width="300px"
                height="200px"
              />
            </StyledLink>
          </Block>
          <Block marginTop="scale600" marginBottom="scale600">
            <SelectOpplysningstype
              isLoading={loading}
              dataId={view.id}
              tagOptions={tagOptions}
              serverUrl={server}
              columnTags={tags}
              setColumnTags={setTags}
              clientUser={clientUser}
            />
          </Block>
        </Block>
      )}
    </React.Fragment>
  )
}

export default TableauView
