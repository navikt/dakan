import * as React from 'react';
import Icon from './Icon';

export const EditIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.8353 1.16464C24.3882 2.7175 24.3882 5.23518 22.8353 6.78804L8.07288 21.5494L0.682007 24L0 23.318L2.44911 15.926L17.2115 1.16464C18.7645 -0.388214 21.2823 -0.388214 22.8353 1.16464ZM18.6175 8.19388L15.8056 5.38219L4.18826 16.9987L2.79497 21.2036L7.00155 19.809L18.6175 8.19388ZM21.4293 2.57049C20.6882 1.82935 19.5074 1.79567 18.7262 2.46943L18.6175 2.57049L17.2115 3.97634L20.0234 6.78804L21.4293 5.38219C22.1705 4.64105 22.2042 3.46036 21.5304 2.67927L21.4293 2.57049Z"
                fill="#19548A"
            />
        </Icon>
    );
};

export const EditHoverIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.8353 6.78804C24.3882 5.23518 24.3882 2.7175 22.8353 1.16464C21.2823 -0.388214 18.7645 -0.388214 17.2115 1.16464L15.8951 2.48093L21.5187 8.10451L22.8353 6.78804ZM20.1045 9.51867L8.07288 21.5494L0.682007 24L0 23.318L2.44911 15.926L14.4809 3.89509L20.1045 9.51867Z"
                fill="#0067C5"
            />
        </Icon>
    );
};

export const EditActiveIcon = ({size, fill}) => {
    return (
        <Icon size={size} fill={fill}>
            <rect width="24" height="24" fill="white" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.8353 6.78804C24.3882 5.23518 24.3882 2.7175 22.8353 1.16464C21.2823 -0.388214 18.7645 -0.388214 17.2115 1.16464L15.8951 2.48093L21.5187 8.10451L22.8353 6.78804ZM20.1045 9.51867L8.07288 21.5494L0.682007 24L0 23.318L2.44911 15.926L14.4809 3.89509L20.1045 9.51867Z"
                fill="#32414F"
            />
        </Icon>
    );
};

export default EditIcon;
