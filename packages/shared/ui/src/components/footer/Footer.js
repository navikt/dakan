import * as React from 'react';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';
import {StyledLink} from 'baseui/link';
import {Logo} from './Logo';

const isInternal = process.env.VERSION ? (process.env.VERSION === 'public' ? false : true) : false;

const StyledLogo = () => {
    const [, theme] = useStyletron();
    return <Logo theme={theme} width={50} />;
};

const Link = (props) => {
    const [, theme] = useStyletron();
    return (
        <StyledLink
            {...props}
            style={{
                textDecoration: 'none',
                color: '#3E3832'
            }}
        />
    );
};

const getLink = () => {
    if (isInternal) return 'https://data.adeo.no/';
    return 'https://data.nav.no/';
};

export const Footer = ({isInternal}) => {
    const [, theme] = useStyletron();
    return (
        <Block
            height="80px"
            width="100%"
            display="flex"
            alignItems="center"
            backgroundColor="#DEF3FF"
            marginTop="auto"
            $style={{
                backgroundImage:
                    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEWc3P+95//e8//////jLWPQAAAAAWJLR0QDEQxM8gAAAFlJREFUWMPt18ENACAIA0CWdEmnFA0kFZnAth9B70mi2vSMyIxgbQJ0AGMeRAKcYB9cgxK9ABfAzTo0pxagAt0lkr2hFKACWT+rACWoQ9O+QARoQfsBEfgdLMMmTXmJ7JyLAAAAAElFTkSuQmCC)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top'
            }}
        >
            <Block display="flex" height="100%" width="100%" justifyContent="start" alignItems="center">
                <Block marginLeft="scale800">
                    <StyledLogo />
                </Block>
                <Block marginLeft="scale500">
                    <Link href={getLink()}>{'Arbeids- og velferdsetaten'}</Link>
                </Block>
            </Block>
        </Block>
    );
};
export default Footer;
