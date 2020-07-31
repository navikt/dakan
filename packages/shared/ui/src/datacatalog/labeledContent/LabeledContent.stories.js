import React from 'react';
import {StyledLink as Link} from 'baseui/link';
import {Block} from 'baseui/block';
import {LabelLarge} from 'baseui/typography';
import {Card} from 'baseui/card';

import {ThemeProvider, navTheme} from '../../theme';
import LabeledContent from './LabeledContent';

export default {
    title: 'Components/LabeledContent',

    parameters: {
        component: LabeledContent,
    },
};

const ITEMS = [...new Array(3)].map(() => ({
    title: 'Overskrift overskrift overskrift',
    content:
        'Skatteetaten har ansvaret for skatt og skattekort. I artikkelen nedenfor får du svar på noen av de mest vanligste spørsmålene om skatt på ytelser fra NAV',
}));

export const default_theme = () => {
    return (
        <ThemeProvider>
            <Block>
                <Block marginBottom="scale500">
                    <LabelLarge>Standard labeled content:</LabelLarge>
                </Block>
                <Card>
                    {ITEMS.map((item, index) => {
                        return (
                            <LabeledContent key={'standard_' + index} aria-label="label" description={item.title}>
                                {item.content}
                            </LabeledContent>
                        );
                    })}
                </Card>
            </Block>
            <Block marginTop="scale1000">
                <Block marginBottom="scale500">
                    <LabelLarge>Labeled content with link:</LabelLarge>
                </Block>
                <Card>
                    <LabeledContent aria-label="label" description={ITEMS[0].title}>
                        <Link href="https://www.google.com">https://www.google.com</Link>
                    </LabeledContent>
                </Card>
            </Block>
            <Block marginTop="scale1000">
                <Block marginBottom="scale500">
                    <LabelLarge>Labeled content with text and link:</LabelLarge>
                </Block>
                <Card>
                    <LabeledContent aria-label="label" description={ITEMS[0].title}>
                        Her er en link til <Link href="https://www.google.com">https://www.google.com</Link>
                    </LabeledContent>
                </Card>
            </Block>
            <Block marginTop="scale1000">
                <Block marginBottom="scale500">
                    <LabelLarge>List labeled content:</LabelLarge>
                </Block>
                <Card>
                    {ITEMS.map((item, index) => {
                        return (
                            <LabeledContent key={'list_' + index} list aria-label="label" description={item.title}>
                                {item.content}
                            </LabeledContent>
                        );
                    })}
                </Card>
            </Block>
        </ThemeProvider>
    );
};

export const nav_theme = () => (
    <ThemeProvider theme={navTheme()}>
        <Block>
            <Block marginBottom="scale500">
                <LabelLarge>Standard labeled content:</LabelLarge>
            </Block>
            <Card>
                {ITEMS.map((item, index) => {
                    return (
                        <LabeledContent key={'standard_' + index} aria-label="label" description={item.title}>
                            {item.content}
                        </LabeledContent>
                    );
                })}
            </Card>
        </Block>
        <Block marginTop="scale1000">
            <Block marginBottom="scale500">
                <LabelLarge>Labeled content with link:</LabelLarge>
            </Block>
            <Card>
                <LabeledContent aria-label="label" description={ITEMS[0].title}>
                    <Link href="https://www.google.com">https://www.google.com</Link>
                </LabeledContent>
            </Card>
        </Block>
        <Block marginTop="scale1000">
            <Block marginBottom="scale500">
                <LabelLarge>Labeled content with text and link:</LabelLarge>
            </Block>
            <Card>
                <LabeledContent aria-label="label" description={ITEMS[0].title}>
                    Her er en link til <Link href="https://www.google.com">https://www.google.com</Link>
                </LabeledContent>
            </Card>
        </Block>
        <Block marginTop="scale1000">
            <Block marginBottom="scale500">
                <LabelLarge>List labeled content:</LabelLarge>
            </Block>
            <Card>
                {ITEMS.map((item, index) => {
                    return (
                        <LabeledContent key={'list_' + index} list aria-label="label" description={item.title}>
                            {item.content}
                        </LabeledContent>
                    );
                })}
            </Card>
        </Block>
    </ThemeProvider>
);
