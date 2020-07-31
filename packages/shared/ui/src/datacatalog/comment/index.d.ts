import * as React from 'react';

export interface ToggleCommentsProps {
    comments?: any;
    setComments?: any;
    tagOptions?: any;
    dataId?: any;
    server?: any;
    tokenId?: any;
    clientUser?: any;
}

export declare const ToggleComments: React.FC<ToggleCommentsProps>;
export default ToggleComments;
export * from './commentModals';
