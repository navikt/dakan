import * as React from 'react';
import {SpinnerProps} from 'baseui/spinner';

export interface CustomLoadingSpinnerProps {
    theme?: any;
    spec?: any;
}

export declare const LoadingSpinner: React.FC<SpinnerProps & CustomLoadingSpinnerProps>;
export default LoadingSpinner;
