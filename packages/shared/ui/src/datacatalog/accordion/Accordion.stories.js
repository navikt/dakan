import * as React from 'react'
import { StatelessAccordion } from 'baseui/accordion'

import { ThemeProvider, navTheme } from '@dakan/theme'
import { Tabs } from '../../components/tabs/Tabs'
import { Tab } from '../../components/tabs/Tab'
import { Panel } from './Panel'

export default {
  title: 'Components/Accordion',

  parameters: {
    component: StatelessAccordion,
  },
}

export const default_panel = () => {
  const [activeKey, setActiveKey] = React.useState('0')
  const [panelExpanded, setPanelExpanded] = React.useState(['0'])

  return (
    <ThemeProvider>
      <StatelessAccordion
        expanded={panelExpanded}
        onChange={(e) => {
          setPanelExpanded(e.expanded)
        }}
      >
        <Panel title="panel 1" isExpanded={panelExpanded[0] === '0'}>
          this is the description in panel 1
        </Panel>
        <Panel title="panel 2" isExpanded={panelExpanded[0] === '1'}>
          <Tabs
            onChange={({ activeKey }) => {
              setActiveKey(activeKey.toString())
            }}
            activeKey={activeKey}
          >
            <Tab title="tab1">This is tab1</Tab>
            <Tab title="tab2">This is tab2</Tab>
          </Tabs>
        </Panel>
        <Panel title="panel 3" isExpanded={panelExpanded[0] === '2'}>
          this is panel 3
        </Panel>
      </StatelessAccordion>
    </ThemeProvider>
  )
}

export const NAV_theme_panel = () => {
  const [activeKey, setActiveKey] = React.useState('0')
  const [panelExpanded, setPanelExpanded] = React.useState(['0'])
  return (
    <ThemeProvider theme={navTheme()}>
      <StatelessAccordion
        expanded={panelExpanded}
        onChange={(e) => setPanelExpanded(e.expanded)}
      >
        <Panel title="panel 1" isExpanded={panelExpanded[0] === '0'}>
          this is the description in panel 1
        </Panel>
        <Panel title="panel 2" isExpanded={panelExpanded[0] === '1'}>
          <Tabs
            onChange={({ activeKey }) => {
              setActiveKey(activeKey.toString())
            }}
            activeKey={activeKey}
          >
            <Tab title="tab1">This is tab1</Tab>
            <Tab title="tab2">This is tab2</Tab>
          </Tabs>
        </Panel>
        <Panel title="panel 3" isExpanded={panelExpanded[0] === '2'}>
          this is panel 3
        </Panel>
      </StatelessAccordion>
    </ThemeProvider>
  )
}
