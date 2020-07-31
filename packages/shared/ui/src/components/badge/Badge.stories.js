import * as React from 'react';
import {Badge} from './Badge';
import {ThemeProvider, navTheme} from '../../theme';

export default {
    title: 'Components/Badge',
    parameters: {
        component: Badge,
    },
};

export const default_badge = () => {
    return (
        <ThemeProvider>
            <Badge>No color</Badge>
            <Badge color="red">Red color</Badge>
            <Badge color="#f34685">Hex color</Badge>
        </ThemeProvider>
    );
};

export const nav_theme_badge = () => {
    return (
        <ThemeProvider theme={navTheme()}>
            <Badge>No color</Badge>
            <Badge color="red">Red color</Badge>
            <Badge color="#f34685">Hex color</Badge>
        </ThemeProvider>
    );
};
