import * as React from 'react'
import { Block } from 'baseui/block'

import { ThemeProvider, navTheme } from '@dakan/theme'
import { SingleUserText } from './ToggleUserText'

export default {
  title: 'Components/SingleUserText',
}

const title = 'Utvidet Beskrivelse'
const edgeLabel = 'hasTableDescription'
const nodeLabel = 'table_description'
const dataId = 123
const clientUser = {
  dataId: 'test id',
  givenName: 'Name',
  surname: 'Surname',
  initial: 'NS',
  email: 'test.test@test.test',
}
const server = 'testServer'
const UserText = [
  {
    id: 1,
    label: 'comment',
    properties: {
      author: 'Lorem ipsum 1',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus molestie lorem, quis ultrices libero commodo vel. Cras vitae mauris porta erat congue rutrum. Integer nec facilisis mi, elementum fringilla tellus. Duis pretium lacinia rutrum. Phasellus porta eget nisi ut sagittis. Cras sollicitudin cursus urna, quis eleifend magna scelerisque sit amet. Integer mi neque, tristique euismod mi a, egestas posuere purus. Aenean interdum odio efficitur, vehicula nisl quis, pellentesque lectus. Donec lobortis accumsan sollicitudin.',
      date: '27.des.2014',
      time: '10:12',
    },
  }
]

export const default_theme = () => {
  const [userText, setUserText] = React.useState(UserText)

  return (
    <ThemeProvider>
      <SingleUserText
        dataId={dataId}
        userText={userText}
        setUserText={setUserText}
        title={title}
        edgeLabel={edgeLabel}
        nodeLabel={nodeLabel}
      />
      <Block marginTop="scale1000" marginBottom="scale800">Empty state</Block>
      <Block>
        <SingleUserText
          dataId={dataId}
          userTexts={[]}
          setUserTexts={setUserText}
          title={title}
          edgeLabel={edgeLabel}
          nodeLabel={nodeLabel}
        />
      </Block>
    </ThemeProvider>
  )
}

export const NAV_theme = () => {
  const [userText, setUserText] = React.useState(UserText)

  return (
    <ThemeProvider theme={navTheme()}>
      <Block marginBottom="scale1200">
        <SingleUserText
          dataId={dataId}
          userText={userText}
          setUserText={setUserText}
          title={title}
          edgeLabel={edgeLabel}
          nodeLabel={nodeLabel}
        />
      </Block>
      <Block marginTop="scale1000" marginBottom="scale800">Empty state</Block>
      <Block>
        <SingleUserText
          dataId={dataId}
          userTexts={[]}
          setUserTexts={setUserText}
          title={title}
          edgeLabel={edgeLabel}
          nodeLabel={nodeLabel}
        />
      </Block>
    </ThemeProvider>
  )
}
