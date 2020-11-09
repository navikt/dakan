import * as React from "react";
import { Table } from "baseui/table";
import { LabeledContent } from '@dakan/ui'

const RepoContributers = (props: any) => {
  const { tableData } = props

  const rows: any = []
  tableData.forEach((data: any) => {
    const row = [data.name, data.date.split('T')[0]]
    rows.push(row)
  })

  return (
    <React.Fragment>
      <LabeledContent description="Bidragsytere" list>
        <Table columns={["Navn", "Siste commit dato"]} data={rows} />
      </LabeledContent>
    </React.Fragment>
  )

}
export default RepoContributers