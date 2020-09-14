import * as React from 'react'
import Icon from './Icon'

export const CameraIcon = ({ size, fill }) => {
  const iconFill = fill || '#19548A'

  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3406 2C15.7406 2 16.1022 2.23839 16.2598 2.60606L18.143 7H23C23.5523 7 24 7.44772 24 8V21C24 21.5523 23.5523 22 23 22H1C0.447715 22 0 21.5523 0 21V8C0 7.44772 0.447715 7 1 7H5.857L7.74024 2.60606C7.89783 2.23839 8.25936 2 8.65938 2H15.3406ZM14.681 4H9.318L7.17576 9H2V20H22V9H16.8242L14.681 4ZM12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9ZM12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const CameraHoverIcon = ({ size, fill }) => {
  const iconFill = fill || '#0067C5'

  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3406 2C15.7406 2 16.1022 2.23839 16.2598 2.60606L18.143 7H23C23.5523 7 24 7.44772 24 8V21C24 21.5523 23.5523 22 23 22H1C0.447715 22 0 21.5523 0 21V8C0 7.44772 0.447715 7 1 7H5.857L7.74024 2.60606C7.89783 2.23839 8.25936 2 8.65938 2H15.3406ZM12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export const CameraActiveIcon = ({ size, fill }) => {
  const iconFill = fill || '#32414F'

  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3406 2C15.7406 2 16.1022 2.23839 16.2598 2.60606L18.143 7H23C23.5523 7 24 7.44772 24 8V21C24 21.5523 23.5523 22 23 22H1C0.447715 22 0 21.5523 0 21V8C0 7.44772 0.447715 7 1 7H5.857L7.74024 2.60606C7.89783 2.23839 8.25936 2 8.65938 2H15.3406ZM12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9Z"
        fill={iconFill}
      />
    </Icon>
  )
}

export default CameraIcon
