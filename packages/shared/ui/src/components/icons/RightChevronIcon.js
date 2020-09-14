import * as React from 'react'
import Icon from './Icon'

export const RightChevronIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 12L8.42857 3L7 4.5L14.1429 12L7 19.5L8.42857 21L17 12Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const RightChevronHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 11.5L8.92857 20.5L6.5 18L13 11.5L6.5 5L8.92857 2.5L17.5 11.5Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const RightChevronActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 11.5L8.92857 20.5L6.5 18L13 11.5L6.5 5L8.92857 2.5L17.5 11.5Z"
        fill={iconFill}
      />
    </Icon>
  )
}
export default RightChevronIcon
