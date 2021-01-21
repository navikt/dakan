import * as React from "react";
import { Block } from "baseui/block";
import { ParagraphLarge } from "baseui/typography";
import { Heading, HeadingLevel } from "baseui/heading";

const PageNotFound = () => {
  return (
    <Block>
      <Block display="flex" justifyContent="center">
        <HeadingLevel>
          <Heading>Denne siden eksisterer ikke.</Heading>
        </HeadingLevel>
      </Block>
      <Block display="flex" justifyContent="center">
        <ParagraphLarge>404 Page Not Found</ParagraphLarge>
      </Block>
    </Block>
  );
};

export default PageNotFound;
