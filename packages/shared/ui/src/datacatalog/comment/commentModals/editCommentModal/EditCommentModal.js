import * as React from 'react';
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter, SIZE} from 'baseui/modal';
import {Textarea} from 'baseui/textarea';
import Cookies from 'js-cookie';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';

import {ModalButton} from '../../../../components/button/Button';
import GetValue from '../../../../utils/GetValue/GetValue';
import GetCurrentDate, {GetCurrentTime} from '../../../../utils/GetCurrentDate/GetCurrentDate';
import {KIND} from 'baseui/button';

export const EditCommentModal = (props) => {
    const {isOpen, setIsOpen, commentContent, commentIndex, comments, setComments, clientUser, server} = props;
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
                time: GetCurrentTime()
            }
        };

        newTableComments.splice(commentIndex, 1);
        newTableComments.unshift(newComment);

        axios
            .put(`${server}/node`, [newComment], {headers: {'JWT-Token': tokenId}})
            .then(() => setComments(newTableComments))
            .catch((error) => console.log(error));
        setCommentText('');
    };

    let content = (
        <React.Fragment>
            <ModalHeader />
            <ModalBody>
                <Block $style={{...theme.typography.font300}}>Du er ikke autorisert til å endre kommentaren.</Block>
            </ModalBody>
            <ModalFooter>
                <ModalButton kind={KIND.minimal} onClick={() => setIsOpen(false)}>
                    Avbryt
                </ModalButton>
            </ModalFooter>
        </React.Fragment>
    );

    if (GetValue(() => clientUser.userId, '') === GetValue(() => commentContent.properties.author, '')) {
        content = (
            <React.Fragment>
                <ModalHeader>Rediger kommentaren</ModalHeader>
                <ModalBody>
                    <Block>
                        <Textarea
                            rows={10}
                            overrides={{
                                InputContainer: {
                                    style: {
                                        height: '100%'
                                    }
                                }
                            }}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Skriv en kommentar..."
                            value={commentText}
                        />
                    </Block>
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
            </React.Fragment>
        );
    }

    return (
        <Modal
            overrides={{
                Dialog: {
                    style: {
                        maxWidth: '1200px',
                        width: '100%'
                    }
                }
            }}
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
        >
            {content}
        </Modal>
    );
};
export default EditCommentModal;
