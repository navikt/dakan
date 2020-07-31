import * as React from 'react';
import {Tab as BaseTab} from 'baseui/tabs-motion';
import {useStyletron} from 'baseui';

export const Tab = (props) => {
    const [, theme] = useStyletron();

    return (
        <BaseTab {...props} ooverrides={theme && theme.tabOverrides}>
            {props.children}
        </BaseTab>
    );
};
