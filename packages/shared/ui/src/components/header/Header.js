import * as React from 'react';
import {StyledLink as Link} from 'baseui/link';
import {useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Label2, LabelMedium} from 'baseui/typography';
import {StyledLink} from 'baseui/link';
import {StatefulPopover} from 'baseui/popover';
import {Button as BaseuiButton, KIND, SHAPE} from 'baseui/button';
import {Drawer, ANCHOR} from 'baseui/drawer';
import {StatefulMenu, OptionList} from 'baseui/menu';

import {InfoIcon, InfoHoverIcon, ContactIcon, ContactHoverIcon} from '../icons';
import {logo, DataKatalogLogo} from './logo';
import {Button} from '../button';
import {MenuIcon} from '../icons/MenuIcon';

const iconSize = 20;

const CustomLink = (props) => {
    const [useCss, theme] = useStyletron();
    const link = useCss({textDecoration: 'none'});
    if (props.config && props.config.link) {
        return (
            <Link href={props.config.link} className={link} aria-label="link">
                <Block font={props.font || 'font650'} color={props.color || 'colorPrimary'}>
                    {props.children}
                </Block>
            </Link>
        );
    }
    return (
        <Block font={props.font || 'font650'} color={props.color || 'colorPrimary'}>
            {props.children}
        </Block>
    );
};

const brandName = (props) => {
    if (props.config && props.config.brand) {
        return props.config.brand;
    }
    return 'Datakatalogen';
};

const NoStyleLink = (props) => (
    <StyledLink style={{textDecoration: 'none'}} href={props.href}>
        {props.children}
    </StyledLink>
);

const Brand = (props) => {
    const [useCss, theme] = useStyletron();
    const link = useCss({textDecoration: 'none'});
    const to = props && props.config && props.config.link ? props.config.link : process.env.HOME_URL;
    return (
        <Block display="flex" alignItems="center">
            <CustomLink {...props}>{DataKatalogLogo}</CustomLink>
        </Block>
    );
};

const UserLogin = (props) => {
    if (props.clientUser && props.clientUser.initial) {
        return (
            <StatefulPopover
                placement="bottom"
                content={
                    <Block padding="scale400">
                        <Label2 display="flex" width="100%">
                            {props.clientUser.userId}
                        </Label2>
                        <Block display="flex" width="100%">
                            <StyledLink href={`${props.server}/logout?redirect_url=${window.location.href}`}>
                                Logg ut
                            </StyledLink>
                        </Block>
                    </Block>
                }
            >
                <BaseuiButton shape={SHAPE.round}>{props.clientUser.initial}</BaseuiButton>
            </StatefulPopover>
        );
    } else {
        return (
            <StyledLink
                href={`${props.server}/login?redirect_url=${window.location.href}`}
                style={{textDecoration: 'none'}}
            >
                <Button>Logg inn</Button>
            </StyledLink>
        );
    }
};

const SideBar = (props) => {
    const toggleMenu = () => {
        props.setIsOpen(!props.isOpen);
    };

    const getItems = () => {
        let items = [];
        if (props && props.config && props.config.showLoginButton) {
            if (props.clientUser && props.clientUser.initial) {
                items.push({
                    label: (
                        <Block>
                            <Block>
                                <Label2 display="flex" width="100%">
                                    {props.clientUser.userId}
                                </Label2>
                            </Block>
                            <Block>
                                <StyledLink href={`${props.server}/logout?redirect_url=${window.location.href}`}>
                                    Logg ut
                                </StyledLink>
                            </Block>
                        </Block>
                    ),
                    href: `${props.server}/logout?redirect_url=${window.location.href}`,
                });
            } else {
                items.push({label: 'Logg inn', href: `${props.server}/login?redirect_url=${window.location.href}`});
            }
        }
        if (props && props.config && props.config.about)
            items.push({label: props.config.about_label || 'om', href: props.config.aboutLink});
        if (props && props.config && props.config.contact)
            items.push({label: props.config.contact_label || 'kontakt', href: ''});
        return items;
    };

    return (
        <Drawer
            anchor={ANCHOR.right}
            isOpen={props.isOpen}
            onClose={toggleMenu}
            size={'40%'}
            overrides={{
                DrawerBody: {
                    style: {
                        marginTop: '0px',
                        marginBottom: '0px',
                        marginLeft: '0px',
                        marginRight: '0px',
                    },
                },
                // Removes the close icon from the drawer
                Close: () => null,
            }}
        >
            <StatefulMenu
                items={getItems()}
                overrides={{
                    Option: {
                        component: OptionList,
                        props: {
                            overrides: {
                                ListItemAnchor: {
                                    style: {
                                        textDecoration: 'none',
                                    },
                                },
                            },
                        },
                    },
                }}
            />
        </Drawer>
    );
};

export const Header = (props) => {
    const [css, theme] = useStyletron();
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
    const link = css({textDecoration: 'none'});
    let showHeaderLineImage = true;
    if (props && props.config && props.config.showHeaderLineImage === false) {
        showHeaderLineImage = false;
    }

    const getMobileView = () => {
        return (
            <React.Fragment>
                <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} {...props} />
                <Block
                    marginLeft={['scale500', '40px']}
                    marginRight={['scale500', '40px']}
                    flex={['auto']}
                    maxWidth={theme && theme.breakpoints && theme.breakpoints.medium + 'px'}
                    display="flex"
                    alignItems="stretch"
                    justifyContent="space-between"
                >
                    <Brand {...props} setIsSideBarOpen={setIsSideBarOpen} />
                    <Block marginTop="16px">
                        <Button
                            kind={KIND.minimal}
                            onClick={() => {
                                setIsSideBarOpen(true);
                            }}
                            startEnhancer={<MenuIcon size={iconSize} />}
                        >
                            Meny
                        </Button>
                    </Block>
                </Block>
            </React.Fragment>
        );
    };

    const getAboutButton = () => {
        return (
            <Block>
                {props && props.config && props.config.about && (
                    <NoStyleLink href={props.config.aboutLink}>
                        <Button
                            kind={KIND.minimal}
                            startEnhancer={<InfoIcon size={iconSize} fill={theme.colors.primary} />}
                            startEnhancerHover={<InfoHoverIcon size={iconSize} />}
                            onClick={props.onClickAbout}
                        >
                            {props.config.about_label || 'om'}
                        </Button>
                    </NoStyleLink>
                )}
            </Block>
        );
    };

    const getContactButton = () => (
        <Block>
            {props && props.config && props.config.contact && (
                <Button
                    kind={KIND.minimal}
                    startEnhancer={<ContactIcon size={iconSize} fill={theme.colors.primary} />}
                    startEnhancerHover={<ContactHoverIcon size={iconSize} />}
                    onClick={props.onClickContact}
                >
                    {props.config.contact_label || 'kontakt'}
                </Button>
            )}
        </Block>
    );

    return (
        <React.Fragment>
            <Block paddingBottom="scale100">
                <Block
                    display={['none', 'none', 'flex']}
                    marginTop="scale300"
                    justifyContent="center"
                    height="80px"
                    $style={{
                        backgroundImage:
                            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAAD1BMVEUAAAA6tPl7zfu95v3///8yRSjLAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAgSURBVCjPY1ACAQY0MKQFjUEAXXpICwqCAEIGwhrKggDsPS591cEhYwAAAABJRU5ErkJggg==)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: '50px',
                    }}
                >
                    <Block
                        marginLeft={['scale500', '40px']}
                        marginRight={['scale500', '40px']}
                        flex={['auto']}
                        maxWidth={theme && theme.breakpoints && theme.breakpoints.large + 'px'}
                        display="flex"
                        alignItems="stretch"
                        justifyContent="space-between"
                    >
                        <Brand {...props} setIsSideBarOpen={setIsSideBarOpen} />
                        <Block display="flex" justifyContent="flex-end" alignSelf="center">
                            {getAboutButton()}
                            {getContactButton()}
                            <Block>
                                {props && props.config && props.config.showLoginButton && <UserLogin {...props} />}
                            </Block>
                        </Block>
                    </Block>
                </Block>
                <Block display={['flex', 'flex', 'none']} marginTop="scale300" justifyContent="center" height="80px">
                    {getMobileView()}
                </Block>
                <Block backgroundColor={theme.colors.headerBorderFill} height="scale100" />
            </Block>
        </React.Fragment>
    );
};

export default Header;
