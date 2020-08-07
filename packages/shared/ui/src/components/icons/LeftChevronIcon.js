import * as React from 'react'
import Icon from './Icon'

export const LeftChevronIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12L15.5714 3L17 4.5L9.85714 12L17 19.5L15.5714 21L7 12Z"
        fill="#19548A"
      />
    </Icon>
  )
}

export const LeftChevronHoverIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 11.5L15.0714 2.5L17.5 5L11 11.5L17.5 18L15.0714 20.5L6.5 11.5Z"
        fill="#0067C5"
      />
    </Icon>
  )
}

export const LeftChevronActiveIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 11.5L15.0714 2.5L17.5 5L11 11.5L17.5 18L15.0714 20.5L6.5 11.5Z"
        fill="#32414F"
      />
    </Icon>
  )
}

export default LeftChevronIcon
