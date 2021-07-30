import * as React from 'react'
import { Block } from 'baseui/block'
import useBigQueryAuditLogs from '../hooks/useBigQueryAuditLogs'
import useBigQueryAccessLogs from '../hooks/useBigQueryAccessLogs'
import { Spinner } from 'baseui/spinner'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

const Content = ({ dataset_id }) => {
  const [counts, countsLoading, countsError] = useBigQueryAuditLogs(dataset_id)
  const [users, usersLoading, usersError] = useBigQueryAccessLogs(dataset_id)

  const Counts = () => {
    if (Array.isArray(counts)) {
      let content: any[] = []
      counts.forEach((col) => {
        content.push([col.date.value, col.count])
      })
      return <Table columns={['Dato', 'Antall']} data={content} />
    }
    return null
  }

  const Users = () => {
    if (Array.isArray(users)) {
      let content: any[] = []
      users.forEach((col) => {
        content.push([col.date.value, col.principalEmail])
      })
      return <Table columns={['Dato', 'Bruker']} data={content} />
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Label>Antall oppslag</Label>
        {countsError ? countsError : null}
        {countsLoading ? <Spinner size="40px" /> : <Counts />}
        <Block marginTop="scale800">
          <Label>Brukere</Label>
          {usersError ? usersError : null}
          {usersLoading ? <Spinner size="40px" /> : <Users />}
        </Block>
      </Block>
    </React.Fragment>
  )
}
export default Content
