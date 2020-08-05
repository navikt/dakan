import * as React from 'react';
import Icon from './Icon';

export const SearchIcon = ({size, fill}) => {
    const iconFill = fill || '#19548A';
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1211 17.2662 13.0709 16.0386 14.6093L24 22.5714L22.5714 24L14.6093 16.0386C13.0709 17.2662 11.1211 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2Z"
                fill={iconFill}
            />
        </Icon>
    );
};

export const SearchHoverIcon = ({size, fill}) => {
    const iconFill = fill || '#0067C5';
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1211 17.2662 13.0709 16.0386 14.6093L24 22.5714L22.5714 24L14.6093 16.0386C13.0709 17.2662 11.1211 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C7.40872 2 5.94146 2.53097 4.76572 3.4254L6.75554 4.53085C7.43047 4.19123 8.1929 4 9 4C11.6078 4 13.7492 5.99637 13.9795 8.54417L15.9702 9.65012C15.9899 9.43606 16 9.2192 16 9C16 5.13401 12.866 2 9 2Z"
                fill={iconFill}
            />
        </Icon>
    );
};

export const SearchActiveIcon = ({size, fill}) => {
    const iconFill = fill || '#32414F';
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1211 17.2662 13.0709 16.0386 14.6093L24 22.5714L22.5714 24L14.6093 16.0386C13.0709 17.2662 11.1211 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C7.40872 2 5.94146 2.53097 4.76572 3.4254L6.75554 4.53085C7.43047 4.19123 8.1929 4 9 4C11.6078 4 13.7492 5.99637 13.9795 8.54417L15.9702 9.65012C15.9899 9.43606 16 9.2192 16 9C16 5.13401 12.866 2 9 2Z"
                fill={iconFill}
            />
        </Icon>
    );
};
export default SearchIcon;
