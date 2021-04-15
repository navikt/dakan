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
      const cols = data.map((col, index) => {
        const table = col.resourceName.split('/').pop()
        content.push([table, col.principalEmail, col.date.value, col.count])
      })
      return (
        <Table
          columns={['Tabell', 'Bruker', 'Dato', 'Antall']}
          data={content}
        />
      )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        <Label>Brukere</Label>
        {error ? error : null}
        {loading ? <Spinner size="40px" /> : <Schema />}
      </Block>
    </React.Fragment>
  )
}
export default Content
