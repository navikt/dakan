import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import useGoogleCatalogMetadata from '../hooks/useGoogleDatacalogMetadata'
import { Spinner } from 'baseui/spinner'

export const GoogleDataCatalogLink = ({ dataset_id: id }) => {
  const [data, loading, error] = useGoogleCatalogMetadata(id)

  const GoogleCatalogLink = () => {
    if (data && data[0] && data[0]['name']) {
      const url = data[0]['name']
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
        {loading ? <Spinner size="40px" /> : <GoogleCatalogLink />}
      </Block>
    </React.Fragment>
  )
}
export default GoogleDataCatalogLink
