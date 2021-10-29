import * as React from 'react'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation'
import { StyledLink as Link } from 'baseui/link'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Label2 } from 'baseui/typography'

const logo = (
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    inkscape:version="1.0 (4035a4f, 2020-05-01)"
    sodipodi:docname="logo.svg"
    id="svg865"
    version="1.1"
    fill="none"
    viewBox="0 0 158 40"
    height="40"
    width="158">
    <metadata
      id="metadata871">
      <rdf:RDF>
        <cc:Work
          rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <defs
      id="defs869" />
    <sodipodi:namedview
      inkscape:current-layer="svg865"
      inkscape:window-maximized="0"
      inkscape:window-y="25"
      inkscape:window-x="0"
      inkscape:cy="63.723504"
      inkscape:cx="111.12639"
      inkscape:zoom="4.5063291"
      showgrid="false"
      id="namedview867"
      inkscape:window-height="1387"
      inkscape:window-width="2560"
      inkscape:pageshadow="2"
      inkscape:pageopacity="0"
      guidetolerance="10"
      gridtolerance="10"
      objecttolerance="10"
      borderopacity="1"
      bordercolor="#666666"
      pagecolor="#ffffff" />
    <rect
      id="rect833"
      fill="#5AC4FF"
      height="8"
      width="8"
      x="150" />
    <path
      style="fill:#5ac4ff;fill-opacity:1"
      id="path835"
      fill="#5AC4FF"
      d="M134 8H0V40H142V16H134V8Z"
      clipRule="evenodd"
      fillRule="evenodd" />
    <rect
      id="rect837"
      fill="#0085CF"
      height="8"
      width="8"
      y="8"
      x="142" />
    <text
      id="text875"
      y="29.999973"
      x="16.647169"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:14.9762px;line-height:1.25;font-family:Futura;-inkscape-font-specification:Futura;fill:#181818;fill-opacity:1;stroke-width:0.936015"
      xml:space="preserve"><tspan
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Futura;-inkscape-font-specification:Futura;stroke-width:0.936015"
        y="29.999973"
        x="16.647169"
        id="tspan873"
        sodipodi:role="line">DATAPAKKER</tspan></text>
  </svg>

)

const CustomLink = (props) => {
  const [useCss,] = useStyletron()
  const link = useCss({ textDecoration: 'none' })
  if (props.config && props.config.link) {
    return (
      <Link href={props.config.link} className={link}>
        <Block
          font={props.font || 'font650'}
          color={props.color || 'colorPrimary'}
        >
          {props.children}
        </Block>
      </Link>
    )
  }
  return (
    <Block font={props.font || 'font650'} color={props.color || 'colorPrimary'}>
      {props.children}
    </Block>
  )
}

const Brand = (props) => {
  const [useCss,] = useStyletron()
  const link = useCss({ textDecoration: 'none' })
  return (
    <NavigationList $align={ALIGN.left}>
      <NavigationItem>
        <Link href={props.config.link} className={link}>
          {logo}
        </Link>
      </NavigationItem>
      <NavigationItem>
        <CustomLink {...props}>{brandName(props)}</CustomLink>
      </NavigationItem>
    </NavigationList>
  )
}

const navheader = (props) => {
  return (
    <HeaderNavigation
    /*  overrides={{
                Root: {
                style: ({$theme}) => ({
                    borderBottom: 'none',
                    margin: 'none',
                    width: '100%'
                }),
                },
            }} */
    >
      <Brand {...props} />
      <NavigationList $align={ALIGN.center}>{props.children}</NavigationList>
      {props.config && props.config.about && (
        <NavigationList $align={ALIGN.right}>
          <NavigationItem>
            <Link href={props.config.aboutlink || './about'}>
              <Label2>om tjenesten</Label2>
            </Link>
          </NavigationItem>
        </NavigationList>
      )}
    </HeaderNavigation>
  )
}

const brandName = (props) => {
  if (props.config && props.config.brand) {
    return props.config.brand
  }
  return 'datakatalogen'
}

const textheader = (props) => {
  return <CustomLink props>{brandName(props)}</CustomLink>
}

export const Header = (props) => {
  return (
    <Block width="100%" display={['none', 'block']}>
      {props.config && props.config.nav && navheader(props)}
      {(!props.config && textheader(props)) ||
        (props.config && !props.config.nav && textheader(props))}
    </Block>
  )
}

export default Header
