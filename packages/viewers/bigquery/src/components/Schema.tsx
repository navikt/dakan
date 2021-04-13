import * as React from 'react'
import { Block } from 'baseui/block'
import useGoogleCatalogMetadata from '../hooks/useGoogleDatacalogMetadata'
import { Spinner } from 'baseui/spinner'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'



const Content = ({ id }) => {
  const [data, loading, error]  = useGoogleCatalogMetadata('lookup')

  const Schema = () => {
    if (data && data[0] && data[0]['schema'] && data[0]['schema']['columns']) {
      const columns = data[0]['schema']['columns']
      if (!Array.isArray(columns)) {
        return null
      }
      let content : any[] = []
      const cols = columns.map((col,index) => {
        content.push([col.column,col.description,col.type])
      })
      return (
      <Table
        columns={["Navn", "Beskrivelse", "Type"]}
        data={content}
      />
      )
    }
    return null
  }

  return (
    <React.Fragment>
    <Block>
        <Label>Skjema</Label>
        {error ? error : null} 
        {loading ?  <Spinner size='40px' /> : 
          <Schema />
        }
      </Block>
    </React.Fragment>
  )
  }
export default Content