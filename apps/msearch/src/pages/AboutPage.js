import * as React from 'react'
import { MediumWidth } from '@dakan/ui'
import { useMarkdown } from '@dakan/hooks'
import env from '@beam-australia/react-env'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { H2 } from 'baseui/typography'

const markdownOpenDataURL = env('MARKDOWN_OPEN_DATA_URL')
const markdownTermURL = env('MARKDOWN_TERM_URL')

const AboutPage = (props) => {
  const [, theme] = useStyletron()
  const [markdownOpenDataText] = useMarkdown(markdownOpenDataURL, theme)
  const [markdownTermText] = useMarkdown(markdownTermURL, theme)

  return (
    <MediumWidth>
      <Block display="block" flex="1" role="main">
        <Block marginBottom="scale900">
          <H2>
            <b>Om Datakatalogen</b>
          </H2>
        </Block>
        <Block marginBottom="scale1200">{markdownOpenDataText}</Block>
        <Block>{markdownTermText}</Block>
      </Block>
    </MediumWidth>
  )
}

export default AboutPage
