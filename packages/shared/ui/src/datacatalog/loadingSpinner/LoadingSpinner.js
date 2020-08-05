import * as React from 'react';
import {Spinner} from 'baseui/spinner';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';

import {merge} from '../../utils/merge';

export const LoadingSpinner = (props) => {
    const [, theme] = useStyletron();

    let themeOverrides = theme && theme.SpinnerOverrides;

    const mergedOverrides = merge(themeOverrides || {}, props.overrides || {});

    return (
        <Block minHeight="100vh" flexDirection="column" display="flex">
            <Block flex="1" display="flex" justifyContent="center" alignItems="center">
                <Spinner {...props} overrides={mergedOverrides} />
            </Block>
        </Block>
    );
};
export default LoadingSpinner;
