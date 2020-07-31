import * as React from 'react';
import {Accordion} from 'baseui/accordion';
import {Panel} from '../accordion/Panel';
import {Block} from 'baseui/block';
import {Card} from 'baseui/card';
import {KIND} from 'baseui/button';
import {LabelLarge} from 'baseui/typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

import {Button} from '../../components/button/Button';
import AddCommentModal from './commentModals/addCommentModal/AddCommentModal';
import EditCommentModal from './commentModals/editCommentModal/EditCommentModal';
import DeleteCommentModal from './commentModals/deleteCommentModal/DeleteCommentModal';
import GetValue from '../../utils/GetValue/GetValue';
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized';

export const ToggleComments = (prop) => {
    const {dataId, comments, setComments, clientUser, server} = prop;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [commentIndex, setCommentIndex] = React.useState(0);
    const [commentContent, setCommentContent] = React.useState({});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
    const [isAddCommentOpen, setIsAddCommentOpen] = React.useState(false);
    const [isEditCommentOpen, setIsEditCommentOpen] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState('');

    const getComments = () => {
        return comments.map((comment, index) => {
            return (
                comment &&
                comment.properties && (
                    <Block padding="scale100" key={'comment_' + index}>
                        <Card>
                            <Block display="flex">
                                <Block flex="1">
                                    <Block display="flex">
                                        <Block flex="1">
                                            <LabelLarge>{comment.properties.author}</LabelLarge>
                                        </Block>
                                        <Block>
                                            <Block>
                                                {'Publisert ' +
                                                    comment.properties.date +
                                                    ', kl. ' +
                                                    comment.properties.time}
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block marginTop="scale800">{comment.properties.comment}</Block>
                                </Block>
                            </Block>
                            <Block marginTop="scale800" display="flex">
                                <Block marginRight="scale800">
                                    <Button
                                        kind={KIND.primary}
                                        onClick={() => {
                                            CheckIfAuthorized(server, () => {
                                                setCommentIndex(index);
                                                setCommentContent(comment);
                                                setIsEditCommentOpen(true);
                                            });
                                        }}
                                    >
                                        Rediger
                                    </Button>
                                </Block>
                                <Block>
                                    <Button
                                        kind={KIND.minimal}
                                        onClick={() => {
                                            CheckIfAuthorized(server, () => {
                                                setCommentIndex(index);
                                                setCommentContent(comment);
                                                setIsDeleteModalOpen(true);
                                            });
                                        }}
                                    >
                                        Slett
                                    </Button>
                                </Block>
                            </Block>
                        </Card>
                    </Block>
                )
            );
        });
    };

    return (
        <Block>
            {
                <Block>
                    <AddCommentModal
                        dataId={dataId}
                        comments={comments}
                        setComments={setComments}
                        isOpen={isAddCommentOpen}
                        setIsOpen={setIsAddCommentOpen}
                        clientUser={clientUser}
                        server={server}
                    />
                    <EditCommentModal
                        isOpen={isEditCommentOpen}
                        setIsOpen={setIsEditCommentOpen}
                        commentContent={commentContent}
                        commentIndex={commentIndex}
                        comments={comments}
                        setComments={setComments}
                        server={server}
                    />
                    <DeleteCommentModal
                        isOpen={isDeleteModalOpen}
                        setIsOpen={setIsDeleteModalOpen}
                        index={commentIndex}
                        commentContent={commentContent}
                        comments={comments}
                        setComments={setComments}
                        server={server}
                    />
                    <Accordion
                        onChange={(e) => {
                            setIsExpanded(GetValue(() => e.expanded[0].toString(), ''));
                        }}
                    >
                        <Panel title="Kommentarer" isExpanded={isExpanded === '0'}>
                            <Block padding="1em">
                                {comments && comments.length > 0 && (
                                    <Block $style={{maxHeight: '250px', overflowY: 'scroll'}}>{getComments()}</Block>
                                )}
                                <Block display="flex" paddingTop="1em">
                                    <Button
                                        onClick={() => {
                                            CheckIfAuthorized(server, () => {
                                                setIsAddCommentOpen(true);
                                            });
                                        }}
                                    >
                                        Skriv kommentar
                                    </Button>
                                </Block>
                            </Block>
                        </Panel>
                    </Accordion>
                </Block>
            }
        </Block>
    );
};
export default ToggleComments;
