import * as React from 'react'
import { ToggleUserText } from '@dakan/ui'

const ExtraDescription = (props: any) => {
  return (
    <React.Fragment>
      <ToggleUserText
        dataId={props.data.id}
        userTexts={props.description}
        setUserTexts={props.setDescription}
        title="Beskrivelse"
        edgeLabel="hasTableDescription"
        nodeLabel="table_description"
      />
    </React.Fragment>
  )
}
export default ExtraDescription;