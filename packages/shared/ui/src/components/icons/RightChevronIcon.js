import * as React from 'react'
import Icon from './Icon'

export const RightChevronIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 12L8.42857 3L7 4.5L14.1429 12L7 19.5L8.42857 21L17 12Z"
        fill="#19548A"
      />
    </Icon>
  )
}

export const RightChevronHoverIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 11.5L8.92857 20.5L6.5 18L13 11.5L6.5 5L8.92857 2.5L17.5 11.5Z"
        fill="#0067C5"
      />
    </Icon>
  )
}

export const RightChevronActiveIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 11.5L8.92857 20.5L6.5 18L13 11.5L6.5 5L8.92857 2.5L17.5 11.5Z"
        fill="#32414F"
      />
    </Icon>
  )
}
export default RightChevronIcon
