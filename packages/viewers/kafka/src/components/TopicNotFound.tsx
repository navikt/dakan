import * as React from "react";
import { Block } from "baseui/block";
import { Heading, HeadingLevel } from "baseui/heading";
import { ParagraphLarge } from "baseui/typography";

const TopicNotfound = (props: any) => {
  console.log(props.error);
  return (
    <Block>
      <Block display="flex" justifyContent="center">
        <HeadingLevel>
          <Heading>Beklager, noe gikk galt.</Heading>
        </HeadingLevel>
      </Block>
      <Block display="flex" justifyContent="center">
        <ParagraphLarge>Feilmelding: {props.error}</ParagraphLarge>
      </Block>
    </Block>
  );
};
export default TopicNotfound;
