import * as React from 'react';
import {useStyletron} from 'baseui';

export const Icon = (props) => {
    const [, theme] = useStyletron();
    const iconFill = props.fill || theme.colors.primary;
    const iconSize = props.size || 24;
    return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconFill} xmlns="http://www.w3.org/2000/svg">
            {props.children}
        </svg>
    );
};

export default Icon;
