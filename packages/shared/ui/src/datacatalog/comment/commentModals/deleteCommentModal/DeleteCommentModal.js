import * as React from 'react';
import axios from 'axios';
import {Block} from 'baseui/block';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'baseui/modal';
import Cookies from 'js-cookie';
import {KIND} from 'baseui/button';
import {useStyletron} from 'baseui';

import {ModalButton} from '../../../../components/button/Button';

export const DeleteCommentModal = (props) => {
    const {isOpen, setIsOpen, index, commentContent, comments, setComments, server} = props;
    const [, theme] = useStyletron();

    const deleteComment = () => {
        const tokenId = Cookies.get('ClientToken');
        const newTableComments = [...comments];
        newTableComments.splice(index, 1);
        axios
            .delete(`${server}/node/delete/id/${commentContent.id}`, {headers: {'JWT-Token': tokenId}})
            .then((response) => {
                console.log(response);
                setComments(newTableComments);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <ModalHeader />
            <ModalBody>
                <Block>Bekreft at du vil slette kommentaren.</Block>
            </ModalBody>
            <ModalFooter>
                <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
                    Avbryt
                </ModalButton>
                <ModalButton
                    onClick={() => {
                        deleteComment();
                        setIsOpen(false);
                    }}
                >
                    Slett
                </ModalButton>
            </ModalFooter>
        </Modal>
    );
};
export default DeleteCommentModal;
