import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';

export const Badge = (props) => {
    const [, theme] = useStyletron();
    return (
        <Block display="flex" overrides={{Block: {style: {...theme.typography.font300}}}}>
            <Block marginRight="scale100" display="grid" alignContent="center">
                <FontAwesomeIcon icon={faCircle} color={props.color} style={{fontSize: '.45em'}} />
            </Block>
            {props.children}
        </Block>
    );
};

export default Badge;
