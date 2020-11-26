import * as React from 'react'

import TableauView from './TableauView'

const TableauViewList = (props: any): JSX.Element => {
  const { viewList, tagOptions, clientUser, isEditMode } = props
  return viewList.map((view: any, index: number) => {
    return (
      <React.Fragment key={`tableau_view_${index}`}>
        <TableauView
          view={view}
          tagOptions={tagOptions}
          clientUser={clientUser}
          isEditMode={isEditMode}
        />
      </React.Fragment>
    )
  })
}
export default TableauViewList
