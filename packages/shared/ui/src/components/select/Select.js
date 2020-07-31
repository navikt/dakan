import React from 'react';
import {Select as BaseSelect} from 'baseui/select';
import {useStyletron} from 'baseui';
import {merge} from '../../utils/merge';

export const Select = (props) => {
    const [, theme] = useStyletron();

    const {overrides, children, ...rest} = props;
    const mergedOverrides = merge(overrides || {}, (theme && theme.selectOverrides) || {});

    return (
        <BaseSelect {...rest} overrides={mergedOverrides}>
            {children}
        </BaseSelect>
    );
};

export default Select;
