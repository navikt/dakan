import React from 'react';
import {Checkbox as BaseCheckbox} from 'baseui/checkbox';
import {useStyletron} from 'baseui';
import {merge} from '../../utils/merge';

export const Checkbox = (props) => {
    const [, theme] = useStyletron();

    const {overrides, children, ...rest} = props;
    const mergedOverides = merge(overrides || {}, (theme && theme.checkboxOverrides) || {});

    return (
        <BaseCheckbox {...rest} overrides={mergedOverides}>
            {children}
        </BaseCheckbox>
    );
};

export default Checkbox;
