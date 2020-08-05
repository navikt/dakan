import React from 'react';
import {Block} from 'baseui/block';
import {LabelLarge} from 'baseui/typography';

import {BackButton, BackLink} from './';
import {ThemeProvider, navTheme} from '../../theme';

export default {
    title: 'Components/Back'
};

export const default_theme = () => {
    return (
        <ThemeProvider>
            <Block>
                <Block marginBottom="scale500">
                    <LabelLarge>Back Button:</LabelLarge>
                </Block>
                <BackButton backButton>{}</BackButton>
            </Block>
            <Block marginTop="scale1000">
                <Block marginBottom="scale500">
                    <LabelLarge>Back Link:</LabelLarge>
                </Block>
                <BackLink backButton>{}</BackLink>
            </Block>
        </ThemeProvider>
    );
};

export const NAV_theme = () => {
    return (
        <ThemeProvider theme={navTheme()}>
            <Block>
                <Block marginBottom="scale500">
                    <LabelLarge>Back Button:</LabelLarge>
                </Block>
                <BackButton backButton>{}</BackButton>
            </Block>
            <Block marginTop="scale1000">
                <Block marginBottom="scale500">
                    <LabelLarge>Back Link:</LabelLarge>
                </Block>
                <BackLink backButton>{}</BackLink>
            </Block>
        </ThemeProvider>
    );
};
