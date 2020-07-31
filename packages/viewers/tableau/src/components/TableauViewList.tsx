import * as React from 'react'

import TableView from './TableauView'

const TableauViewList = (props: any): JSX.Element => {
  const { viewList, tagOptions, clientUser } = props
  return viewList.map((view: any, index: number) => {
    return (
      <React.Fragment key={`tableau_view_${index}`}>
        <TableView
          view={view}
          tagOptions={tagOptions}
          clientUser={clientUser}
        />
      </React.Fragment>
    )
  })
}
export default TableauViewList
