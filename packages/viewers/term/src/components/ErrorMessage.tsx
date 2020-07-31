import * as React from 'react';
import {Block} from 'baseui/block';
import {Heading, HeadingLevel} from 'baseui/heading';

const ErrorMessage = () => {
    return (
        <Block display="flex" justifyContent="center">
            <HeadingLevel>
                <Heading>Begrepet er ikke tilgjengelig</Heading>
            </HeadingLevel>
        </Block>
    );
};
export default ErrorMessage;
