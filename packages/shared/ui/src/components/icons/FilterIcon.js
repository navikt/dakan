import * as React from 'react';
import Icon from './Icon';

export const FilterIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 0V5L15 13V21L9 24V13L1 5V0H23ZM21 2H3V4.171L11 12.1716V20.764L13 19.764V12.1716L19.17 6H13V4H21V2Z"
                fill="#19548A"
            />
        </Icon>
    );
};

export const FilterHoverIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 4V0H1V5L9 13V24L15 21V13L22 6H13V4H23Z"
                fill="#0067C5"
            />
        </Icon>
    );
};

export const FilterActiveIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 4V0H1V5L9 13V24L15 21V13L22 6H13V4H23Z"
                fill="#32414F"
            />
        </Icon>
    );
};
export default FilterIcon;
