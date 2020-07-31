import * as React from 'react';
import Icon from './Icon';

export const CloseIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 4.38462L13.3846 12L21 19.6154L19.6154 21L12 13.3846L4.38462 21L3 19.6154L10.6154 12L3 4.38462L4.38462 3L12 10.6154L19.6154 3L21 4.38462Z"
            />
        </Icon>
    );
};

export default CloseIcon;
