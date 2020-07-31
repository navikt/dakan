import * as React from 'react';
import {Tabs as BaseTabs} from 'baseui/tabs-motion';
import {useStyletron} from 'baseui';

export const Tabs = (props) => {
    const [, theme] = useStyletron();
    return (
        <BaseTabs {...props} overrides={theme && theme.tabOverrides}>
            {props.children}
        </BaseTabs>
    );
};
