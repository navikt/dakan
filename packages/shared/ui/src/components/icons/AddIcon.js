import * as React from 'react'
import Icon from './Icon'

export const AddIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM13 6V11H18V13H13V18H11V13H6V11H11V6H13Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const AddHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM13 6V11H18V13H13V18H11V13H6V11H11V6H13Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const AddActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM13 6V11H18V13H13V18H11V13H6V11H11V6H13Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export default AddIcon
