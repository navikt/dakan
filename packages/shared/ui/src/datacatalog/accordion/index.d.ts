import * as React from 'react';
import {PanelProps} from 'baseui/accordion';

export interface CustomAccordionProps {
    theme?: any;
    spec?: any;
}

export declare const Panel: React.FC<PanelProps & CustomAccordionProps>;
export default Panel;
