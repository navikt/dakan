import React from 'react';
import {Button as BaseButton, KIND} from 'baseui/button';
import {useStyletron} from 'baseui';
import {ModalButton as BaseModalButton} from 'baseui/modal';

import {merge} from '../../utils/merge';

export const Button = (props) => {
    const [, theme] = useStyletron();
    const [hover, setHover] = React.useState(false);

    const {overrides, children, startEnhancer, startEnhancerHover, endEnhancer, endEnhancerHover, ...rest} = props;

    let themeOverrides = theme && theme.buttonOverrides;

    if (props.kind == KIND.secondary) themeOverrides = theme && theme.buttonSecondaryOverrides;
    if (props.kind == KIND.minimal) themeOverrides = theme && theme.buttonMinimalOverrides;

    const mergedOverrides = merge(themeOverrides || {}, overrides || {});

    const mouseEnter = () => {
        setHover(true);
    };

    const mouseLeave = () => {
        setHover(false);
    };

    const StartEnhancer = () => {
        if (hover && startEnhancerHover) return startEnhancerHover;
        return startEnhancer || null;
    };

    const EndEnhancer = () => {
        if (hover && endEnhancerHover) return endEnhancerHover;
        return endEnhancer || null;
    };

    return (
        <BaseButton
            {...rest}
            overrides={mergedOverrides}
            startEnhancer={StartEnhancer()}
            endEnhancer={EndEnhancer()}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
        </BaseButton>
    );
};

export const ModalButton = (props) => {
    const [, theme] = useStyletron();
    const [hover, setHover] = React.useState(false);

    const {overrides, children, startEnhancer, startEnhancerHover, endEnhancer, endEnhancerHover, ...rest} = props;

    const mouseEnter = () => {
        setHover(true);
    };

    const mouseLeave = () => {
        setHover(false);
    };

    const StartEnhancer = () => {
        if (hover && startEnhancerHover) return startEnhancerHover;
        return startEnhancer || null;
    };

    const EndEnhancer = () => {
        if (hover && endEnhancerHover) return endEnhancerHover;
        return endEnhancer || null;
    };

    let themeOverrides = (theme && theme.buttonOverrides) || {};

    if (props.kind == KIND.secondary) themeOverrides = theme && theme.buttonSecondaryOverrides;
    if (props.kind == KIND.minimal) themeOverrides = theme && theme.buttonMinimalOverrides;

    const mergedOverrides = merge(themeOverrides || {}, overrides || {});

    return (
        <BaseModalButton
            {...rest}
            overrides={mergedOverrides}
            startEnhancer={StartEnhancer()}
            endEnhancer={EndEnhancer()}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
        </BaseModalButton>
    );
};

export default Button;
