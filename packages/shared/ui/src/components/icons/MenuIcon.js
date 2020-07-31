import * as React from 'react';
import Icon from './Icon';

export const MenuIcon = (props) => {
    return (
        <Icon size={props.size} fill={props.fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1H24V3H0V1ZM0 11H24V13H0V11ZM24 21H0V23H24V21Z"
                fill="#19548A"
            />
        </Icon>
    );
};
export default MenuIcon;
