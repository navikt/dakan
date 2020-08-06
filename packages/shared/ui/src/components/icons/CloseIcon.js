import * as React from 'react'
import Icon from './Icon'

export const CloseIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 4.38462L13.3846 12L21 19.6154L19.6154 21L12 13.3846L4.38462 21L3 19.6154L10.6154 12L3 4.38462L4.38462 3L12 10.6154L19.6154 3L21 4.38462Z"
        fill="#19548A"
      />
    </Icon>
  )
}

export const CloseHoverIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0H0V24H24V0ZM13.3846 12L21 4.38462L19.6154 3L12 10.6154L4.38462 3L3 4.38462L10.6154 12L3 19.6154L4.38462 21L12 13.3846L19.6154 21L21 19.6154L13.3846 12Z"
        fill="#0067C5"
      />
    </Icon>
  )
}

export const CloseActiveIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0H0V24H24V0ZM13.3846 12L21 4.38462L19.6154 3L12 10.6154L4.38462 3L3 4.38462L10.6154 12L3 19.6154L4.38462 21L12 13.3846L19.6154 21L21 19.6154L13.3846 12Z"
        fill="#32414F"
      />
    </Icon>
  )
}

export default CloseIcon
