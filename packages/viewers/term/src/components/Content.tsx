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
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(indexEntry.oppdatert).toLocaleDateString([], options)
    }
  }

  const getRightContent = () => {
    const ITEMS = [
      { item: 'alternativ_navn', label: 'Søkeord' },
      { item: 'definisjon', label: 'Definisjon' },
      { item: 'begrepsforklaring', label: 'Begrepsforklaring' },
      { item: 'eksempel', label: 'Eksempel' },
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
              <ReactMarkdown source={indexEntry[entry.item].replace("(www", "(//www")} />
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
    if (indexEntry && indexEntry.status !== 'Godkjent begrep') {
      return (
        <Block display="flex" justifyContent="center">
          <HeadingLevel>
            <Heading>Begrepet '{indexEntry.term}' er under arbeid.</Heading>
          </HeadingLevel>
        </Block>
      )
    } else {
      return (
        indexEntry && (
          <Block>
            <LargeWidth headingLabel="Begrep" headingText={indexEntry.term}>
              <Block display={['block', 'block', 'flex']}>
                <Block flex={'3'}>
                  {viewerVersion && viewerVersion === 'private' && (
                    <Paragraph2>{indexEntry.id}</Paragraph2>
                  )}
                  {getRightContent()}
                </Block>
                <Block
                  flex={
                    viewerVersion && viewerVersion === 'private' ? '1' : '0'
                  }
                  marginLeft={['none', 'none', 'scale1000']}
                >
                  {viewerVersion && viewerVersion === 'private' && (
                    <Block>
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
                    </Block>
                  )}
                </Block>
              </Block>
            </LargeWidth>
          </Block>
        )
      )
    }
  }

  return <React.Fragment>{getContent()}</React.Fragment>
}
export default Content
