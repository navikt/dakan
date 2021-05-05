import * as React from 'react'
import { Block } from 'baseui/block'
import useBigQueryAuditlogs from '../hooks/useBigQueryAuditlogs'
import { Spinner } from 'baseui/spinner'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

const Content = ({ id }) => {
  const [data, loading, error] = useBigQueryAuditlogs('audit')

  const Schema = () => {
    if (Array.isArray(data)) {
      let content: any[] = []
      data.map((col, index) => {
        content.push([col.date.value, col.count])
      })
      return (
        <Table
          columns={['Dato', 'Antall']}
          data={content}
        />
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Label>Antall oppslag</Label>
        {error ? error : null}
        {loading ? <Spinner size="40px" /> : <Schema />}
      </Block>
    </React.Fragment>
  )
}
export default Content
