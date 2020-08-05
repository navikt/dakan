import * as React from 'react';
import Icon from './Icon';

export const DownChevronIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 17L3 8.42857L4.5 7L12 14.1429L19.5 7L21 8.42857L12 17Z"
                fill="#19548A"
            />
        </Icon>
    );
};

export const DownChevronHoverIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 17L3 8.42857L5.5 6L12 12.5L18.5 6L21 8.42857L12 17Z"
                fill="#0067C5"
            />
        </Icon>
    );
};

export const DownChevronActiveIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 17L3 8.42857L5.5 6L12 12.5L18.5 6L21 8.42857L12 17Z"
                fill="#32414F"
            />
        </Icon>
    );
};

export default DownChevronIcon;
