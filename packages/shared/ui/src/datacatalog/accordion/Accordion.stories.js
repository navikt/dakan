import * as React from 'react'
import { Panel } from './Panel'
import { Accordion } from 'baseui/accordion'
import { ThemeProvider, navTheme } from '../../theme'
import { Tabs } from '../../components/tabs/Tabs'
import { Tab } from '../../components/tabs/Tab'

export default {
  title: 'Components/Accordion',

  parameters: {
    component: Accordion,
  },
}

export const default_panel = () => {
  const [activeKey, setActiveKey] = React.useState('0')
  const [panelExpanded, setPanelExpanded] = React.useState()

  return (
    <ThemeProvider>
      <Accordion onChange={(e) => setPanelExpanded(e.expanded[0])}>
        <Panel title="panel 1" isExpanded={panelExpanded === '0'}>
          this is the description in panel 1
        </Panel>
        <Panel title="panel 2" isExpanded={panelExpanded === '1'}>
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
        <Panel title="panel 3" isExpanded={panelExpanded === '2'}>
          this is panel 3
        </Panel>
      </Accordion>
    </ThemeProvider>
  )
}

export const NAV_theme_panel = () => {
  const [activeKey, setActiveKey] = React.useState('0')
  const [panelExpanded, setPanelExpanded] = React.useState()
  return (
    <ThemeProvider theme={navTheme()}>
      <Accordion onChange={(e) => setPanelExpanded(e.expanded[0])}>
        <Panel title="panel 1" isExpanded={panelExpanded === '0'}>
          this is the description in panel 1
        </Panel>
        <Panel title="panel 2" isExpanded={panelExpanded === '1'}>
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
        <Panel title="panel 3" isExpanded={panelExpanded === '2'}>
          this is panel 3
        </Panel>
      </Accordion>
    </ThemeProvider>
  )
}
