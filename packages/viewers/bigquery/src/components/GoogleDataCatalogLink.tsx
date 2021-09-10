import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'
import useGoogleCatalogMetadata from '../hooks/useGoogleDatacalogMetadata'
import { Spinner } from 'baseui/spinner'

export const GoogleDataCatalogLink = ({ dataset_id: id }) => {
  const [data, loading, error] = useGoogleCatalogMetadata(id)
  const [link, setLink] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    if (data && data['name']) {
      const url = data['name']
      setLink(
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
        </Block>,
      )
    }
  }, [data])

  return (
    <React.Fragment>
      <Block>
        {error ? error : null}
        {loading ? <Spinner size="40px" /> : link}
      </Block>
    </React.Fragment>
  )
}
export default GoogleDataCatalogLink
