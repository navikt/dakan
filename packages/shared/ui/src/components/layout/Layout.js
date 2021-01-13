import * as React from 'react'
import { Block } from 'baseui/block'
import { HeadingMedium, LabelMedium, HeadingXLarge} from 'baseui/typography'
import { useStyletron } from 'baseui'
import { Footer } from '../footer'

const MARGIN_LEFT = '16px'
const PADDING_LEFT = '16px'
const MARGIN_RIGHT = '20px'
const LEFT_MENU_WIDTH = '320px'

export const ToolBar = (props) => {
  if (props && props.toolbar) {
    return (
      <Block display="flex" width="100%" justifyContent="center">
        <Block
          display="flex"
          width="100%"
          maxWidth={props.breakpointWidth + 'px'}
          marginBottom="scale400"
          marginTop="scale400"
        >
          <Block flex="1">{props.toolbar}</Block>
        </Block>
      </Block>
    )
  } else {
    return <React.Fragment />
  }
}

export const Heading = (props) => {
  if (props && props.headingLabel && props.headingText) {
    return (
      <Block marginBottom="scale1200">
        <HeadingXLarge>
          <LabelMedium>{props.headingLabel}</LabelMedium>
          {props.headingText}
        </HeadingXLarge>
      </Block>
    )
  }
  return null
}

export const FullWidth = (props) => {
  const [, theme] = useStyletron()
  return (
    <Block
      display="flex"
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      maxWidth={theme.breakpoints.xlarge + 'px'}
    >
      <Block width="100%" marginLeft={MARGIN_LEFT} marginRight={MARGIN_RIGHT}>
        <SingleColumn right={props.children} />
      </Block>
      <Footer />
    </Block>
  )
}

export const LargeWidth = (props) => {
  const [, theme] = useStyletron()
  return (
    <Block
      display="flex"
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      paddingLeft={MARGIN_LEFT}
      paddingRight={MARGIN_RIGHT}
    >
      <Block width="100%">
        <ToolBar {...props} breakpointWidth={theme.breakpoints.large} />
        <Block display="flex" justifyContent="center" width="100%">
          <Block
            display="flex"
            justifyContent="center"
            width="100%"
            maxWidth={theme.breakpoints.large + 'px'}
          >
            <Block flex="1">
              <Heading {...props} />
            </Block>
          </Block>
        </Block>
        <Block display="flex" justifyContent="center" width="100%">
          <Block
            flex="1"
            width="100%"
            maxWidth={theme.breakpoints.large + 'px'}
          >
            {props.children}
          </Block>
        </Block>
      </Block>
      <Footer />
    </Block>
  )
}

export const MediumWidth = (props) => {
  const [, theme] = useStyletron()
  return (
    <Block display="flex" width="100%" minHeight="100vh" flexDirection="column">
      <Block width="100%" paddingLeft={MARGIN_LEFT} paddingRight={MARGIN_RIGHT}>
        <ToolBar {...props} breakpointWidth={theme.breakpoints.medium} />
        <Block display="flex" justifyContent="center" width="100%">
          <Block
            display="flex"
            justifyContent="center"
            width="100%"
            maxWidth={theme.breakpoints.medium + 'px'}
          >
            <Block flex="1">
              <Heading {...props} />
            </Block>
          </Block>
        </Block>
        <Block display="flex" justifyContent="center" width="100%">
          <Block
            flex="1"
            width="100%"
            maxWidth={theme.breakpoints.medium + 'px'}
          >
            {props.children}
          </Block>
        </Block>
      </Block>
      <Footer />
    </Block>
  )
}

export const SingleColumn = (props) => {
  const [, theme] = useStyletron()
  return (
    <React.Fragment>
      <Block
        display="flex"
        justifyContent=""
        width="100%"
        paddingLeft={PADDING_LEFT}
      >
        <ToolBar {...props} />
      </Block>
      <Block
        display="flex"
        justifyContent=""
        width="100%"
        paddingLeft={PADDING_LEFT}
      >
        <Block flex="1">
          <Heading {...props} />
        </Block>
      </Block>

      <Block
        display="flex"
        justifyContent="center"
        width="100%"
        paddingLeft={PADDING_LEFT}
      >
        <Block width="100%">{props.right}</Block>
      </Block>
    </React.Fragment>
  )
}

const TwoCols = (props) => {
  const [, theme] = useStyletron()
  return (
    <React.Fragment>
      <Block
        display="flex"
        justifyContent="center"
        width="100%"
        paddingLeft={PADDING_LEFT}
      >
        <ToolBar {...props} breakpointWidth={theme.breakpoints.medium} />
      </Block>
      <Block display="flex" justifyContent="center" width="100%">
        <Block
          display="flex"
          justifyContent="flex-start"
          width="100%"
          maxWidth={theme.breakpoints.medium + 'px'}
        >
          <Block flex="1" width="100%" paddingLeft={MARGIN_LEFT}>
            <Heading {...props} />
          </Block>
        </Block>
      </Block>
      <Block display="flex" justifyContent="center" width="100%">
        <Block
          display="flex"
          justifyContent="center"
          width="100%"
          alignItems="flex-start"
          maxWidth={theme.breakpoints.medium + 'px'}
        >
          <Block
            display={['none', 'block']}
            width={LEFT_MENU_WIDTH}
            paddingLeft={PADDING_LEFT}
          >
            {props.left}
          </Block>
          <Block flex={'1'} width="100%" paddingLeft={PADDING_LEFT}>
            {props.right}
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  )
}

const ThreeCols = (props) => {
  const [, theme] = useStyletron()
  return (
    <React.Fragment>
      <Block
        display="flex"
        justifyContent="center"
        width="100%"
        paddingLeft={PADDING_LEFT}
      >
        <ToolBar {...props} breakpointWidth={theme.breakpoints.large} />
      </Block>
      <Block display="flex" justifyContent="center" width="100%">
        <Block
          display="flex"
          justifyContent="flex-start"
          width="100%"
          maxWidth={theme.breakpoints.large + 'px'}
        >
          <Block flex="1" width="100%" paddingLeft={MARGIN_LEFT}>
            <Heading {...props} />
          </Block>
        </Block>
      </Block>

      <Block display="flex" justifyContent="center" width="100%">
        <Block
          display="flex"
          justifyContent="center"
          width="100%"
          maxWidth={theme.breakpoints.large + 'px'}
        >
          <Block
            display={['none', 'block']}
            width={LEFT_MENU_WIDTH}
            paddingLeft={MARGIN_LEFT}
          >
            {props.left}
          </Block>
          <Block flex={'3'} width="100%" paddingLeft={MARGIN_LEFT}>
            {props.right}
          </Block>
          {props.options && (
            <Block flex={'1'} width="100%" paddingLeft={MARGIN_LEFT}>
              {props.options}
            </Block>
          )}
        </Block>
      </Block>
    </React.Fragment>
  )
}

export const Layout = (props) => {
  return (
    <React.Fragment>
      <Block
        display="flex"
        width="100%"
        minHeight="100vh"
        alignItems="flex-start"
        flexDirection="column"
        marginTop="scale800"
      >
        <Block width="100%" paddingRight={MARGIN_RIGHT}>
          <Block display={['block', 'block', 'none', 'none']} width="100%">
            <SingleColumn {...props}></SingleColumn>
          </Block>
          <Block display={['none', 'none', 'block', 'none']} width="100%">
            <TwoCols {...props} />
          </Block>
          <Block display={['none', 'none', 'none', 'block']} width="100%">
            <ThreeCols {...props} />
          </Block>
        </Block>
      </Block>
      <Footer />
    </React.Fragment>
  )
}

export const LayoutSplit = (props) => {
  const [, theme] = useStyletron()
  return (
    <React.Fragment>
      <Block paddingLeft={MARGIN_LEFT} paddingRight={MARGIN_RIGHT}>
        <ToolBar {...props} breakpointWidth={theme.breakpoints.large} />
        <Block
          display="flex"
          width="100%"
          minHeight="100vh"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Block display="flex" justifyContent="center" width="100%">
            <Block
              display="flex"
              justifyContent="flex-start"
              width="100%"
              maxWidth={theme.breakpoints.large + 'px'}
            >
              <Block flex="1" width="100%">
                <Heading {...props} />
              </Block>
            </Block>
          </Block>

          <Block display="flex" justifyContent="center" width="100%">
            <Block
              display="flex"
              justifyContent="center"
              width="100%"
              alignItems="flex-start"
              maxWidth={theme.breakpoints.large + 'px'}
            >
              <Block
                display={['none', 'none', 'block']}
                flex="1"
                paddingRight="scale800"
              >
                {props.left}
              </Block>
              <Block flex="1" width="100%">
                <Block
                  display={['block', 'block', 'none']}
                  flex="1"
                  marginBottom="scale1200"
                >
                  {props.left}
                </Block>
                {props.right}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
