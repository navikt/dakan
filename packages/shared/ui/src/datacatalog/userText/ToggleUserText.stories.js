import * as React from 'react'
import { Block } from 'baseui/block'

import { ThemeProvider, navTheme } from '@dakan/theme'
import ToggleUserText from './ToggleUserText'

export default {
  title: 'Components/ToggleComments',
}

const title = 'Kommentar'
const edgeLabel = 'hasComment'
const nodeLabel = 'table_comment'
const dataId = 123
const clientUser = {
  dataId: 'test id',
  givenName: 'Name',
  surname: 'Surname',
  initial: 'NS',
  email: 'test.test@test.test',
}
const server = 'testServer'
const commentList = [
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
  },
  {
    id: 2,
    label: 'comment',
    properties: {
      author: 'Lorem ipsum 2',
      text:
        'Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac.',
      date: '17.sep.2013',
      time: '17:42',
    },
  },
  {
    id: 3,
    label: 'comment',
    properties: {
      author: 'Lorem ipsum 3',
      text:
        'Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac. Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac. Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac. Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac.',
      date: '17.sep.2012',
      time: '17:42',
    },
  },
]

export const default_theme = () => {
  const [comments, setComments] = React.useState(commentList)

  return (
    <ThemeProvider>
      <ToggleUserText
        dataId={dataId}
        userTexts={comments}
        setUserTexts={setComments}
        title={title}
        edgeLabel={edgeLabel}
        nodeLabel={nodeLabel}
      />
    </ThemeProvider>
  )
}

export const NAV_theme = () => {
  const [comments, setComments] = React.useState(commentList)

  return (
    <ThemeProvider theme={navTheme()}>
      <Block marginBottom="scale1200">
        <ToggleUserText
          dataId={dataId}
          userTexts={comments}
          setUserTexts={setComments}
          title={title}
          edgeLabel={edgeLabel}
          nodeLabel={nodeLabel}
        />
      </Block>
      <Block>
        <ToggleUserText
          dataId={dataId}
          userTexts={comments}
          setUserTexts={setComments}
          title="Beskrivelse"
          edgeLabel="hasDescription"
          nodeLabel="table_description"
        />
      </Block>
    </ThemeProvider>
  )
}
