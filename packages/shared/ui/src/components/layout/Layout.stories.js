import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Card, StyledBody, StyledAction, StyledThumbnail } from 'baseui/card'
import { LabelLarge } from 'baseui/typography'
import { Navigation } from 'baseui/side-navigation'
import { StatefulCheckbox } from 'baseui/checkbox'
import { Tag } from '../tag'
import { StyledLink as Link } from 'baseui/link'
import { Display4 } from 'baseui/typography'
import { Paragraph1 } from 'baseui/typography'

import { Header } from '../header'
import { ThemeProvider, navTheme } from '../../theme'
import { Footer } from '../footer'
import {
  Layout,
  FullWidth,
  LargeWidth,
  MediumWidth,
  LayoutSplit,
} from './Layout'
import { ITEMS, nav } from './data'
import { BackLink } from '../back/Back'

const setLocation = (id) => {
  console.log(id)
}

const menu = () => {
  const [location, setLocation] = useState('#level1.1.1')
  return (
    <Navigation
      items={nav}
      activeItemId={location}
      onChange={({ item }) => setLocation(item.itemId)}
      overrides={{
        NavItem: {
          style: ({ $active, $theme }) => {
            if (!$active)
              return {
                ':hover': {
                  color: $theme.colors.positive400,
                },
              }
            return {
              backgroundColor: $theme.colors.positive400,
              borderLeftColor: $theme.colors.mono900,
              color: $theme.colors.mono900,
              ':hover': {
                color: $theme.colors.positive400,
              },
            }
          },
        },
      }}
    />
  )
}

const checkBoxes = () => {
  return (
    <Block>
      {ITEMS.map((item) => {
        return (
          <StatefulCheckbox onChange={console.log}>
            {item.subtitle}
          </StatefulCheckbox>
        )
      })}
    </Block>
  )
}

const item = () => {
  return (
    <Block
      as="h2"
      overrides={{
        Block: {
          style: ({ $theme }) => {
            return {
              borderBottom: '1px black solid',
            }
          },
        },
      }}
    >
      <Display4 marginBottom="scale800">
        <Link href="http://www.google.com">Google</Link>
      </Display4>
      <Paragraph1>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisisnisl Proin ut dui sed metus pharetra hend
        rerit vel non mi. Nulla ornare faucibus ex, non facilisisnisl Proin ut
        dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex,
        non facilisisnisl
      </Paragraph1>
      <Block marginBottom="scale800">
        <Tag
          closeable={false}
          onClick={() => {
            onClick('Opplysningstype')
          }}
          variant="solid"
          kind="neutral"
        >
          Opplysningstype
        </Tag>
      </Block>
    </Block>
  )
}

const card = () => {
  return (
    <Card
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              width: '100%',
              outline: 'none',
              backgroundColor: $theme.colors.white,
            }
          },
        },
      }}
    >
      <StyledBody>
        <Display4 marginBottom="scale800">
          <Link href="http://www.google.com">Google</Link>
        </Display4>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Tag
          closeable={false}
          onClick={() => {
            onClick('neutral')
          }}
          variant="solid"
          kind="neutral"
        >
          neutral
        </Tag>
      </StyledAction>
    </Card>
  )
}

const cardcontent = () => {
  return ITEMS.map((item) => {
    return <Block>{card()}</Block>
  })
}

const itemcontent = () => {
  return ITEMS.map((i) => {
    return (
      <Block>
        <Block>
          <BackLink />
        </Block>
        <Block>{item()}</Block>
      </Block>
    )
  })
}

export default {
  title: 'Components/Layout',
  parameters: {
    component: Layout,
  },
}

export const Dynamic = () => {
  const onResize = (size) => {
    //console.log('resize: ', size)
  }

  const theme = navTheme()

  return (
    <ThemeProvider theme={theme}>
      <Header showBackButton config={{ nav: true }}></Header>
      <Block width="100%">
        <Block height="40px" width="100%" backgroundColor="red">
          <AutoSizer defaultHeight="20px" onResize={onResize}>
            {({ width, height }) => (
              <Block width="100%">
                {width}:{height}. {JSON.stringify(theme.breakpoints)}{' '}
              </Block>
            )}
          </AutoSizer>
        </Block>
        <Block backgroundColor="silver" width="100%">
          <Layout
            left={<Block backgroundColor="yellow">{itemcontent()}</Block>}
            right={<Block backgroundColor="blue">{itemcontent()}</Block>}
            options={<Block backgroundColor="green">{itemcontent()}</Block>}
          />
        </Block>
      </Block>
    </ThemeProvider>
  )
}

export const DynamicHeading = () => {
  const onResize = (size) => {
    //console.log('resize: ', size)
  }

  const theme = navTheme()

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Block width="100%">
        <Block height="40px" width="100%" backgroundColor="red">
          <AutoSizer defaultHeight="20px" onResize={onResize}>
            {({ width, height }) => (
              <Block width="100%">
                {width}:{height}. {JSON.stringify(theme.breakpoints)}{' '}
              </Block>
            )}
          </AutoSizer>
        </Block>
        <Block backgroundColor="silver" width="100%">
          <Layout
            headingLabel="Heading label"
            headingText="Heading text"
            left={<Block backgroundColor="yellow">{itemcontent()}</Block>}
            right={<Block backgroundColor="blue">{itemcontent()}</Block>}
            options={<Block backgroundColor="green">{itemcontent()}</Block>}
          />
        </Block>
      </Block>
    </ThemeProvider>
  )
}

export const Split = () => (
  <ThemeProvider theme={navTheme()}>
    <Header />
    <Block backgroundColor="silver" width="100%">
      <LayoutSplit
        headingLabel="Heading label"
        headingText="Heading text"
        left={<Block backgroundColor="yellow">{itemcontent()}</Block>}
        right={<Block backgroundColor="blue">{itemcontent()}</Block>}
      />
    </Block>
  </ThemeProvider>
)

export const DynamicTwoColumns = () => (
  <ThemeProvider theme={navTheme()}>
    <Header />
    <Block backgroundColor="silver" width="100%">
      <Layout
        left={<Block backgroundColor="yellow">{checkBoxes()}</Block>}
        right={<Block backgroundColor="blue">{itemcontent()}</Block>}
      />
    </Block>
  </ThemeProvider>
)

export const DynamicTwoColumnsShort = () => (
  <ThemeProvider theme={navTheme()}>
    <Header showBackButton config={{ nav: true }}></Header>
    <Block backgroundColor="silver" width="100%">
      <Layout
        left={<Block backgroundColor="yellow">{checkBoxes()}</Block>}
        right={<Block backgroundColor="blue">'test'</Block>}
      />
    </Block>
  </ThemeProvider>
)

export const MediumWidths = () => (
  <ThemeProvider theme={navTheme()}>
    <Header></Header>
    <MediumWidth>{itemcontent()}</MediumWidth>
  </ThemeProvider>
)

export const MediumWidthHeading = () => (
  <ThemeProvider theme={navTheme()}>
    <Header></Header>
    <MediumWidth headingLabel="Heading label" headingText="Heading text">
      {itemcontent()}
    </MediumWidth>
  </ThemeProvider>
)

export const LargeWidthHeading = () => (
  <ThemeProvider theme={navTheme()}>
    <Header></Header>
    <LargeWidth headingLabel="Heading label" headingText="Heading text">
      {itemcontent()}
    </LargeWidth>
  </ThemeProvider>
)

export const LargeWidths = () => (
  <ThemeProvider theme={navTheme()}>
    <Header></Header>
    <LargeWidth>{itemcontent()}</LargeWidth>
  </ThemeProvider>
)

export const FullWidths = () => (
  <ThemeProvider theme={navTheme()}>
    <Header showBackButton config={{ nav: true }}></Header>
    <FullWidth>{itemcontent()}</FullWidth>
  </ThemeProvider>
)
