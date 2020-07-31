import * as React from 'react';
import {useStyletron} from 'baseui';
import {KIND} from 'baseui/button';
import {Button} from '../button';
import {StyledLink} from 'baseui/link';
import {Layer} from 'baseui/layer';
import {ChevronDown, Delete, Overflow as UserIcon, Upload as Icon} from 'baseui/icon';
import {Unstable_AppNavBar as AppNavBar, POSITION} from 'baseui/app-nav-bar';
import {Block} from 'baseui/block';
import {InfoIcon, ContactIcon} from '../icons';
import {DataKatalogLogo} from '../header/logo';

const renderLabel = (user) => {
    return user && user.name;
};

const renderLogout = (user) => {
    return <StyledLink href={`${props.server}/logout?redirect_url=${window.location.href}`}>Logg ut</StyledLink>;
};

const getIcon = (icon) => {
    if (icon === 'ContactIcon') return <ContactIcon size={24} fill="#19548A" />;
    if (icon === 'InfoIcon') return <InfoIcon size={24} fill="#19548A" />;
    return null;
};

const getOnClick = (link) => {
    return () => {};
};

const renderItem = (item) => {
    return (
        <StyledLink href={item.link} style={{textDecoration: 'none'}}>
            <Button kind={KIND.minimal} startEnhancer={getIcon(item.icon)}>
                {item.label}
            </Button>
        </StyledLink>
    );
};

const MAIN_NAV = [
    {
        icon: null,
        item: {label: 'Om ', icon: 'InfoIcon', link: 'https://data.nav.no/about'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        icon: null,
        item: {label: 'Kontakt oss', icon: 'ContactIcon', link: ''},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
];

const isActive = (arr, item, activeItem) => {
    let active = false;
    for (let i = 0; i < arr.length; i++) {
        const elm = arr[i];
        if (elm === item) {
            if (item === activeItem) return true;
            return isActive((item && item.nav) || [], activeItem, activeItem);
        } else if (elm.nav) {
            active = isActive(elm.nav || [], item, activeItem);
        }
    }
    return active;
};

const userName = () => {
    if (props.tokenId && props.clientUser) return props.clientUser;
};

export const Navbar = (props) => {
    const [css, theme] = useStyletron();
    const [user, setUser] = React.useState({nav: []});
    const containerStyles = css({
        boxSizing: 'border-box',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
    });

    React.useEffect(() => {
        if (props.tokenId && props.clientUser) {
            setUser({
                name: props.clientUser,
                nameSubtitle: '',
                imgUrl: '',
                nav: [
                    {
                        icon: UserIcon,
                        item: {user},
                        mapItemToNode: renderLogout,
                        mapItemToString: renderLabel,
                    },
                ],
            });
        }
    }, [props.tokenId, props.clientUser]);

    const url = props && props.config && props.config.link ? props.config.link : process.env.HOME_URL;
    const appDisplayName = (
        <StyledLink
            $style={{
                textDecoration: 'none',
                color: 'inherit',
                ':hover': {color: 'inherit'},
                ':visited': {color: 'inherit'},
            }}
            href={url || '#'}
        >
            {DataKatalogLogo}
        </StyledLink>
    );

    return (
        <React.Fragment>
            <Layer>
                <AppNavBar
                    appDisplayName={appDisplayName}
                    mainNav={MAIN_NAV}
                    userNav={user && user.nav}
                    username={user && user.Name}
                    usernameSubtitle={user && user.nameSubtitle}
                    userImgUrl={user && user.ImgUrl}
                    overrides={theme && theme.navbarOverrides}
                />
            </Layer>
        </React.Fragment>
    );
};

export default Navbar;
