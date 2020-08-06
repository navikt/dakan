import * as React from 'react'
import { TabProps, TabsProps } from 'baseui/tabs'

export interface CustomTabsProps {
  theme?: any
}

export declare const Tab: React.FC<TabProps & CustomTabsProps>

export declare const Tabs: React.FC<TabsProps & CustomTabsProps>
export default Tabs
