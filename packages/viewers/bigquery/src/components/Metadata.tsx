import * as React from 'react'
import { Block } from 'baseui/block'
import { LabeledContent } from '@dakan/ui'
import ReactMarkdown from 'react-markdown'
import { StyledLink } from 'baseui/link'

const Metadata = ({ item }) => {
  if (!item) return null
  const Head = () => {
    return (
      <div role="main">
        {item.description && (
          <LabeledContent description="Beskrivelse" list>
            <ReactMarkdown source={item.description} />
          </LabeledContent>
        )}
        {item.format && (
          <LabeledContent description="Type" list>
            {item.format}
          </LabeledContent>
        )}
        {item.pii && (
          <LabeledContent description="Personopplysninger" list>
            {item.pii === 'false' ? 'Ingen' : 'Ja'}
          </LabeledContent>
        )}
        {item.accessRights && (
          <LabeledContent description="Tilgang" list>
            {item.accessRights}
          </LabeledContent>
        )}
        {item.temporal && (
          <LabeledContent description="Dekker tidsperiode" list>
            {typeof item.temporal === 'object' ? (
              <Block>
                {item.temporal.from ? item.temporal.from + ' - ' : null}
                {item.temporal.to ? item.temporal.to : null}
              </Block>
            ) : (
              item.temporal
            )}
          </LabeledContent>
        )}
        {item.creator && (
          <LabeledContent description="Laget av" list>
            {typeof item.creator === 'object' ? (
              <Block>
                <Block>
                  {item.creator.name ? 'Navn: ' + item.creator.name : null}
                </Block>
                <Block>
                  {item.creator.email ? 'Epost: ' + item.creator.email : null}
                </Block>
              </Block>
            ) : (
              item.temporal
            )}
          </LabeledContent>
        )}
        {item.publisher && (
          <LabeledContent description="Utgiver" list>
            {item.publisher.name ? item.publisher.name : null}
          </LabeledContent>
        )}
        {item.keyword &&
          Array.isArray(item.keyword) &&
          item.keyword.length > 0 && (
            <LabeledContent description="Nøkkelord" list>
              {item.keyword.join(', ')}
            </LabeledContent>
          )}
        {item && item.uri && (
          <LabeledContent description="Datasett" list>
            <StyledLink aria-label="Link til datasett" href={item.uri}>
              Google Data Catalog
            </StyledLink>
          </LabeledContent>
        )}
      </div>
    )
  }

  return (
    <React.Fragment>
      <Head />
    </React.Fragment>
  )
}

export default Metadata
