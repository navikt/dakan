import * as React from 'react'

export interface HeaderProps {
  theme?: any
  spec?: any
  type?: any
  key?: any
  config?: any
  server?: string
  tokenId?: string
  clientUser?: string
  showBackButton?: boolean
  showLoginButton?: boolean
}

export declare const Header: React.FC<HeaderProps>
export default Header
