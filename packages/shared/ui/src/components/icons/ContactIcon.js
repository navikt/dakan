import * as React from 'react'
import Icon from './Icon'

export const ContactIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'

  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V24L7 19H20C22.2091 19 24 17.2091 24 15V4C24 1.79086 22.2091 0 20 0H4ZM20 2C21.0544 2 21.9182 2.81588 21.9945 3.85074L22 15C22 16.0544 21.0349 16.9237 20 17H6L2 20V4C2 2.94564 2.81588 2.08183 3.85074 2.00549L20 2ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM17 9C16.4477 9 16 9.44772 16 10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const ContactHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'

  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V24L7 19H20C22.2091 19 24 17.2091 24 15V4C24 1.79086 22.2091 0 20 0H4Z"
        fill={iconFill}
      />
      <path
        d="M6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z"
        fill="white"
      />
      <path
        d="M11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10Z"
        fill="white"
      />
      <path
        d="M16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10Z"
        fill="white"
      />
    </Icon>
  )
}

export const ContactActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'

  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V24L7 19H20C22.2091 19 24 17.2091 24 15V4C24 1.79086 22.2091 0 20 0H4Z"
        fill={iconFill}
      />
      <path
        d="M6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z"
        fill="white"
      />
      <path
        d="M11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10Z"
        fill="white"
      />
      <path
        d="M16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10Z"
        fill="white"
      />
    </Icon>
  )
}

export default ContactIcon
