import * as React from 'react';
import {KIND} from 'baseui/button';
import {Block} from 'baseui/block';
import {ArrowLeft} from 'baseui/icon';
import {StyledLink as Link} from 'baseui/link';
import {LabelSmall} from 'baseui/typography';
import {useStyletron} from 'baseui';

import {Button} from '../button/Button';

export const BackButton = () => (
    <Button kind={KIND.minimal} onClick={() => window.history.back()}>
        <ArrowLeft size={25} />
        Tilbake
    </Button>
);

export const BackLink = () => {
    const [css, theme] = useStyletron();
    const {colors, typography, animation} = theme;
    return (
        <Block>
            <a
                onClick={() => window.history.back()}
                style={{
                    color: colors.linkText,
                    ...typography.font350,
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}
            >
                <Block display="flex" alignItems="center">
                    <ArrowLeft size={25} /> Tilbake
                </Block>
            </a>
        </Block>
    );
};

export default BackButton;
