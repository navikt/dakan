import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import useGoogleCatalogMetadata from '../hooks/useGoogleDatacalogMetadata'
import { Spinner } from 'baseui/spinner'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

const Content = ({ dataset_id: id }) => {
  const [data, loading, error] = useGoogleCatalogMetadata(id)

  const Schema = () => {
    if (data && data[0] && data[0]['schema'] && data[0]['schema']['columns']) {
      const columns = data[0]['schema']['columns']
      if (!Array.isArray(columns)) {
        return null
      }
      let content: any[] = []
      columns.forEach((col, index) => {
        content.push([col.column, col.description, col.type])
      })
      return <Table columns={['Navn', 'Beskrivelse', 'Type']} data={content} />
    }
    return null
  }

  const GoogleCatalogLink = () => {
    if (data && data[0] && data[0]['name']) {
      const url = data[0]['name']
      return ( <Block><StyledLink
         //@ts-ignore
        isAnimateUnderline={false}
        isFocusVisible={false}
        target='_blank'
        href={'https://console.cloud.google.com/datacatalog/' + url}
    >
        {'Google Data Catalog'}
    </StyledLink>
    </Block>
        
        )
    }
    return null
  }

  return (
    <React.Fragment>
      <Block>
        {error ? error : null}
        {loading ? <Spinner size="40px" /> : 
        <Block>
          <Block marginBottom='scale800'>
          <Label>Link</Label>
          <GoogleCatalogLink />
          </Block>
          <Block>
          <Label>Skjema</Label>
          <Schema />
          </Block>
        </Block>
        }
      </Block>
    </React.Fragment>
  )
}
export default Content
