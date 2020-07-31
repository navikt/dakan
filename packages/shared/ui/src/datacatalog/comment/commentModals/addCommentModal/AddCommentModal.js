import * as React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'baseui/modal';
import {Textarea} from 'baseui/textarea';
import shortid from 'shortid';
import axios from 'axios';
import Cookies from 'js-cookie';
import {Spinner} from 'baseui/spinner';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';

import {ModalButton} from '../../../../components/button/Button';
import GetCurrentDate, {GetCurrentTime} from '../../../../utils/GetCurrentDate/GetCurrentDate';
import {KIND} from 'baseui/button';

export const AddCommentModal = (props) => {
    const {dataId, comments, setComments, isOpen, setIsOpen, clientUser, server} = props;
    const [commentText, setCommentText] = React.useState('');
    const [showSpinner, setShowSpinner] = React.useState(false);
    const [, theme] = useStyletron();

    const addComment = () => {
        const tokenId = Cookies.get('ClientToken');
        const newTableComments = comments ? [...comments] : [];
        const newComment = {
            id: `${dataId}.comment_${shortid.generate()}`,
            label: 'table_comment',
            properties: {
                type: 'table_comment',
                author: clientUser.userId,
                comment: commentText,
                date: GetCurrentDate(),
                time: GetCurrentTime(),
            },
        };
        newTableComments.unshift(newComment);
        const commentPayload = {
            source_id: dataId,
            edge_label: 'hasComment',
            node_body: newComment,
        };
        axios
            .put(`${server}/node/edge/upsert`, commentPayload, {headers: {'JWT-Token': tokenId}})
            .then(() => {
                setComments(newTableComments);
                setShowSpinner(false);
                setIsOpen(false);
            })
            .catch((error) => console.log(error));
        setCommentText('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
                setShowSpinner(false);
            }}
        >
            <ModalHeader />
            {showSpinner ? (
                <Block alignContent="center" justifyContent="center" marginBottom="scale1000">
                    <Block display="flex" justifyContent="center" marginBottom="scale300">
                        Kommentaren lagres...
                    </Block>
                    <Block display="flex" justifyContent="center">
                        <Spinner size={56} />
                    </Block>
                </Block>
            ) : (
                <Block>
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
                                setShowSpinner(true);
                            }}
                        >
                            Lagre
                        </ModalButton>
                    </ModalFooter>
                </Block>
            )}
        </Modal>
    );
};
export default AddCommentModal;
