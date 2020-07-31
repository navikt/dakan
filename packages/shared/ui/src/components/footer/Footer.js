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
                color: theme.colors && theme.colors.white,
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
            backgroundColor={theme.colors && theme.colors.primary}
            marginTop="auto"
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
