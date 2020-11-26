import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { loadFontsForStorybook } from './loadFontsForStorybook'

import { GlobalStyle } from './shared/global'

addParameters({
  options: {
    showRoots: true,
  },
})

addDecorator(withA11y)
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
))

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
    //require.context('../src/stories', true, /\.stories\.js$/),
  ],
  module,
)

loadFontsForStorybook()
