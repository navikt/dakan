import * as React from 'react'
import Icon from './Icon'

export const UpChevronIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7L3 15.5714L4.5 17L12 9.85714L19.5 17L21 15.5714L12 7Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const UpChevronHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6L21 14.5714L18.5 17L12 10.5L5.5 17L3 14.5714L12 6Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const UpChevronActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6L21 14.5714L18.5 17L12 10.5L5.5 17L3 14.5714L12 6Z"
        fill={iconFill}
      />
    </Icon>
  )
}
export default UpChevronIcon
