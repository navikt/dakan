import * as React from 'react'
import { Block } from 'baseui/block'
import { Paragraph2 } from 'baseui/typography'
import { Heading, HeadingLevel } from 'baseui/heading'
import { LargeWidth, LabeledContent } from '@dakan/ui'
import ReactMarkdown from 'react-markdown'
import { useStyletron } from 'baseui'

import StatusText from './StatusText'
import JiraRelations from './JiraRelations'

const Content = (props: any) => {
  const { indexEntry, viewerVersion } = props
  const [, theme] = useStyletron()

  const getDate = () => {
    if (!indexEntry.oppdatert) return null
    else {
      return new Date(indexEntry.oppdatert).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
  }

  const getRightContent = () => {
    const ITEMS = [
      { item: 'alternativ_navn', label: 'Søkeord' },
      { item: 'definisjon', label: 'Definisjon' },
      { item: 'begrepsforklaring', label: 'Begrepsforklaring' },
      { item: 'eksempel', label: 'Eksempel' },
      { item: 'forhold_til_kilde', label: 'Forhold til kilde' },
      { item: 'kilde', label: 'Kilde' },
      { item: 'relasjoner', label: 'Relasjoner til andre begreper' },
    ]

    return ITEMS.map((entry: any, index: number) => {
      if (entry.item === 'relasjoner') {
        return (
          <Block key={entry.item + index} marginBottom={'1em'}>
            <LabeledContent aria-label="label" description={entry.label}>
              <JiraRelations relations={indexEntry.relasjoner} />
            </LabeledContent>
          </Block>
        )
      }

      return (
        <Block key={entry.item + index} marginBottom={'1em'}>
          <LabeledContent arialabel="label" description={entry.label}>
            {indexEntry[entry.item] ? (
              <ReactMarkdown
                children={indexEntry[entry.item].replace('(www', '(//www')}
              />
            ) : (
              <React.Fragment>{`Ingen ${entry.label.toLowerCase()} funnet.`}</React.Fragment>
            )}
          </LabeledContent>
        </Block>
      )
    })
  }

  const getLeftContent = () => {
    let ITEMS: any = []

    if (viewerVersion && viewerVersion === 'private') {
      ITEMS = [
        { item: 'oppdatert', label: 'Sist Revidert' },
        { item: 'fagomrade', label: 'Fagområdet' },
        { item: 'begrepseier', label: 'Begrepseier' },
        { item: 'status', label: 'Status' },
      ]
    }

    return ITEMS.map((entry: any, index: number) => {
      if (entry.item === 'oppdatert') {
        return (
          <Block key={entry.item + index} marginBottom="1em">
            <LabeledContent aria-label="label" description={entry.label} list>
              {getDate()}
            </LabeledContent>
          </Block>
        )
      }

      if (entry.item === 'status') {
        return (
          <Block key={entry.item + index} marginBottom="1em">
            <StatusText status={indexEntry.status} />
          </Block>
        )
      }

      return (
        <Block key={entry.item + index} marginBottom="1em">
          <LabeledContent aria-label="label" description={entry.label} list>
            {indexEntry[entry.item]
              ? indexEntry[entry.item]
              : `Ingen ${entry.item} funnet.`}
          </LabeledContent>
        </Block>
      )
    })
  }

  const getContent = () => {
    const termStatus = ['Revisjon', 'Høring', 'Manuell behandling']

    const statusText = termStatus.includes(indexEntry.status)
      ? 'er under'
      : 'har status'

    if (indexEntry && indexEntry.status !== 'Godkjent begrep') {
      return (
        <div role="main">
          <Block display="flex" justifyContent="center">
            <HeadingLevel>
              <Heading>
                Begrepet '{indexEntry.term}' {statusText}{' '}
                {indexEntry.status.toLowerCase()}.
              </Heading>
            </HeadingLevel>
          </Block>
        </div>
      )
    } else {
      return (
        indexEntry && (
          <LargeWidth headingLabel="Begrep" headingText={indexEntry.term}>
            <Block display={['block', 'block', 'flex']}>
              <Block flex={'3'}>
                <div role="main">
                  {viewerVersion && viewerVersion === 'private' && (
                    <Paragraph2>{indexEntry.id}</Paragraph2>
                  )}
                  {getRightContent()}
                </div>
              </Block>
              <Block
                flex={viewerVersion && viewerVersion === 'private' ? '1' : '0'}
                marginLeft={['none', 'none', 'scale1000']}
              >
                {viewerVersion && viewerVersion === 'private' && (
                  <div role="complementary">
                    <Block
                      display={['none', 'block']}
                      $style={{
                        borderLeft: `2px solid ${theme.colors.primary}`,
                      }}
                    >
                      <Block marginLeft="scale200">{getLeftContent()}</Block>
                    </Block>
                    <Block display={['block', 'none']}>
                      {getLeftContent()}
                    </Block>
                  </div>
                )}
              </Block>
            </Block>
          </LargeWidth>
        )
      )
    }
  }

  return <React.Fragment>{getContent()}</React.Fragment>
}
export default Content
