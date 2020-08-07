import * as React from 'react'
import Icon from './Icon'

export const DownloadIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17V20C3 21.0544 3.81588 21.9182 4.85074 21.9945L5 22H19C20.0544 22 20.9182 21.1841 20.9945 20.1493L21 20V17H23V20C23 22.2091 21.2091 24 19 24H5C2.79086 24 1 22.2091 1 20V17H3ZM13 0V13.295L17.5455 9L19 10.3746L12 17L5 10.3746L6.45455 9L11 13.295V0H13Z"
        fill="#19548A"
      />
    </Icon>
  )
}

export const DownloadHoverIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20V17H1V20C1 22.2091 2.79086 24 5 24H19C21.2091 24 23 22.2091 23 20V17H21V20H3ZM14 10.3746V0H10V10.3746H6.9375H5L12 17L19 10.3746H17.3125H14Z"
        fill="#0067C5"
      />
    </Icon>
  )
}

export const DownloadActiveIcon = ({ size, fill }) => {
  return (
    <Icon size={size} fill={fill}>
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20V17H1V20C1 22.2091 2.79086 24 5 24H19C21.2091 24 23 22.2091 23 20V17H21V20H3ZM14 10.3746V0H10V10.3746H6.9375H5L12 17L19 10.3746H17.3125H14Z"
        fill="#32414F"
      />
    </Icon>
  )
}

export default DownloadIcon
