import * as React from 'react'
import Icon from './Icon'

export const MenuIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'

  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1H24V3H0V1ZM0 11H24V13H0V11ZM24 21H0V23H24V21Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const MenuHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1H24V5H0V1ZM0 10H24V14H0V10ZM24 19H0V23H24V19Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const MenuActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1H24V5H0V1ZM0 10H24V14H0V10ZM24 19H0V23H24V19Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export default MenuIcon
