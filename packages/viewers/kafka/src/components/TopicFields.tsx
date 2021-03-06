import * as React from 'react'
import { Block } from 'baseui/block'
import { LabelLarge } from 'baseui/typography'

import FieldViewer from './FieldViewer'

const TopicFields = (props: any): JSX.Element => {
  const { fieldsToView, tagOptions, clientUser, isEditMode } = props
  if (!fieldsToView.length) {
    return (
      <Block display="flex" justifyContent="center" marginTop="scale1000">
        <LabelLarge>Ingen felter funnet.</LabelLarge>
      </Block>
    )
  } else {
    return fieldsToView.map((field: any, index: number) => {
      return (
        <div role="listitem" key={'field_' + index}>
          {fieldsToView && (
            <FieldViewer
              field={field}
              tagOptions={tagOptions}
              clientUser={clientUser}
              isEditMode={isEditMode}
            />
          )}
        </div>
      )
    })
  }
}

export default TopicFields
