import * as React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphLarge } from 'baseui/typography';

import { Header } from '../../components/header'
import { FullWidth } from '../../components/layout'

export const ErrorPage = (props) => {
  const { header, layout, errorMessage } = props

  let message = ""

  try {
      const jsonError = JSON.parse(errorMessage)
      message = jsonError.message ? jsonError.message : JSON.stringify(jsonError)
  } catch {
    message = errorMessage.message ? errorMessage.message : JSON.stringify(errorMessage)
  }

  let content = (
    <Block marginTop="scale1600" role="main">
      <Block display="flex" justifyContent="center">
        <HeadingLevel>
          <Heading>Beklager, noe gikk galt.</Heading>
        </HeadingLevel>
      </Block>
      <Block display="flex" justifyContent="center">
        <ParagraphLarge>Feilmelding: {message}</ParagraphLarge>
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