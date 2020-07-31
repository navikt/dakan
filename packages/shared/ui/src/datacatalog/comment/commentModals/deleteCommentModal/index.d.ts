import * as React from 'react';

export interface DeleteCommentModalProps {
    isOpen?: any;
    setIsOpen?: any;
    index?: any;
    commentContent?: any;
    comments?: any;
    setComments?: any;
    tagOptions?: any;
    dataId?: any;
    server?: any;
    tokenId?: any;
}

export declare const DeleteCommentModal: React.FC<DeleteCommentModalProps>;
export default DeleteCommentModal;
