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

export const MenuHoverIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1H24V5H0V1ZM0 10H24V14H0V10ZM24 19H0V23H24V19Z"
                fill="#0067C5"
            />
        </Icon>
    );
};

export const MenuActiveIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1H24V5H0V1ZM0 10H24V14H0V10ZM24 19H0V23H24V19Z"
                fill="#32414F"
            />
        </Icon>
    );
};

export default MenuIcon;
