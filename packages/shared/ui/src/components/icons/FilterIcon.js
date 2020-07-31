import * as React from 'react';
import Icon from './Icon';

export const FilterIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 0V5L15 13V21L9 24V13L1 5V0H23ZM21 2H3V4.171L11 12.1716V20.764L13 19.764V12.1716L19.17 6H13V4H21V2Z"
            />
        </Icon>
    );
};

export default FilterIcon;
