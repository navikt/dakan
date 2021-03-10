import * as React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphLarge } from 'baseui/typography';

import { Header } from '../../components/header'
import { FullWidth } from '../../components/layout'

const ErrorPage = (props) => {
  const { layout, errorMessage } = props

  if (layout) {
    return (
      <React.Fragment>
        <Header />
        <FullWidth>
          <Block marginTop="scale1600">
            <Block display="flex" justifyContent="center">
              <HeadingLevel>
                <Heading>Beklager, noe gikk galt.</Heading>
              </HeadingLevel>
            </Block>
            <Block display="flex" justifyContent="center">
              <ParagraphLarge>Feilmelding: {errorMessage}</ParagraphLarge>
            </Block>
          </Block>
        </FullWidth>
      </React.Fragment>
    )
  } else {
    return (
      <Block marginTop="scale1600">
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
  }
}
export default ErrorPage