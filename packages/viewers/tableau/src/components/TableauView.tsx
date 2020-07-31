import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import { LabelMedium } from 'baseui/typography'
import env from '@beam-australia/react-env'
import axios from 'axios'
import { SelectOpplysningstype } from '@dakan/ui'

import GetValue from '../utils/GetValue'

const server = env('SERVER')

const TableauView = (props: any) => {
  const { view, tagOptions, clientUser } = props

  const [viewTags, setViewTags] = React.useState([])

  const handleGetTagResponse = (response: any) => {
    if (typeof response.data === 'object' && response.data !== null) {
      setViewTags(response.data)
    } else {
      console.log(response)
    }
  }

  React.useEffect(() => {
    axios
      .get(`${server}/node/out/${view.id}/hasTag`)
      .then(handleGetTagResponse)
      .catch((e) => console.log(e))
  }, [view.id])

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
              dataId={view.id}
              tagOptions={tagOptions}
              serverUrl={server}
              columnTags={viewTags}
              setColumnTags={setViewTags}
              clientUser={clientUser}
            />
          </Block>
        </Block>
      )}
    </React.Fragment>
  )
}

export default TableauView
