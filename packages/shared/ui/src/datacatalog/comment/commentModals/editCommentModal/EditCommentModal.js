import * as React from 'react';
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'baseui/modal';
import {Textarea} from 'baseui/textarea';
import Cookies from 'js-cookie';
import {useStyletron} from 'baseui';

import {ModalButton} from '../../../../components/button/Button';
import GetValue from '../../../../utils/GetValue/GetValue';
import GetCurrentDate, {GetCurrentTime} from '../../../../utils/GetCurrentDate/GetCurrentDate';
import {KIND} from 'baseui/button';

export const EditCommentModal = (props) => {
    const {isOpen, setIsOpen, commentContent, commentIndex, comments, setComments, server} = props;
    const [commentText, setCommentText] = React.useState('');
    const [, theme] = useStyletron();

    React.useEffect(() => {
        setCommentText(GetValue(() => commentContent.properties.comment));
    }, [commentContent]);

    const addComment = () => {
        const tokenId = Cookies.get('ClientToken');
        const newTableComments = comments ? [...comments] : [];
        const newComment = {
            id: commentContent.id,
            label: 'table_comment',
            properties: {
                type: 'table_comment',
                author: commentContent.properties.author,
                comment: commentText,
                date: GetCurrentDate(),
                time: GetCurrentTime(),
            },
        };

        newTableComments.splice(commentIndex, 1);
        newTableComments.unshift(newComment);

        axios
            .put(`${server}/node`, [newComment], {headers: {'JWT-Token': tokenId}})
            .then(() => setComments(newTableComments))
            .catch((error) => console.log(error));
        setCommentText('');
    };

    return (
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <ModalHeader>Rediger kommentaren</ModalHeader>
            <ModalBody>
                <Textarea
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Skriv en kommentar..."
                    value={commentText}
                />
            </ModalBody>
            <ModalFooter>
                <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
                    Avbryt
                </ModalButton>
                <ModalButton
                    onClick={() => {
                        addComment();
                        setIsOpen(false);
                    }}
                >
                    Lagre
                </ModalButton>
            </ModalFooter>
        </Modal>
    );
};
export default EditCommentModal;
