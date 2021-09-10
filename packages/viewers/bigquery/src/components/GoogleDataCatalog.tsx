import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import useGoogleCatalogMetadata from '../hooks/useGoogleDatacalogMetadata'
import { Spinner } from 'baseui/spinner'
import { Table } from 'baseui/table-semantic'
import { Label } from '@dakan/ui'

const GoogleDataCatalog = ({ dataset_id: id }) => {
  const [data, loading, error] = useGoogleCatalogMetadata(id)

  const Schema = () => {
    if (data && data['schema'] && data['schema']['columns']) {
      const content = data['schema']['columns']
      if (!Array.isArray(content)) {
        return null
      }
      return <Table columns={['Navn', 'Mode', 'Type']} data={content} />
    }
    return null
  }

  const GoogleCatalogLink = () => {
    if (data && data['name']) {
      const url = data['name']
      return (
        <Block>
          <StyledLink
            //@ts-ignore
            isAnimateUnderline={false}
            isFocusVisible={false}
            target="_blank"
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
        {loading ? (
          <Spinner size="40px" />
        ) : (
          <Block>
            <Block marginBottom="scale800">
              <Label>Link</Label>
              <GoogleCatalogLink />
            </Block>
            <Block>
              <Label>Skjema</Label>
              <Schema />
            </Block>
          </Block>
        )}
      </Block>
    </React.Fragment>
  )
}
export default GoogleDataCatalog
