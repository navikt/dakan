import * as React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphLarge } from 'baseui/typography';

import { Header } from '../../components/header'
import { FullWidth } from '../../components/layout'

const ErrorPage = (props) => {
  const { header, layout, errorMessage } = props

  let content = (
    <Block marginTop="scale1600" role="main">
      <Block display="flex" justifyContent="center">
        <HeadingLevel>
          <Heading>Beklager, noe gikk galt.</Heading>
        </HeadingLevel>
      </Block>
      <Block display="flex" justifyContent="center">
        <ParagraphLarge>Feilmelding: {errorMessage}</ParagraphLarge>
      </Block>
    </Block>
  )

  if (layout) {
    content = (
      <FullWidth>
        {content}
      </FullWidth>
    )
  } if (header) {
    content = (
      <React.Fragment>
        <Header />
        {content}
      </React.Fragment>
    )
  }
  return content
}
export default ErrorPage