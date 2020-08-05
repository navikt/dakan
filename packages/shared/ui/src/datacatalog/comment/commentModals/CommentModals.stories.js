import * as React from 'react';
import {Block} from 'baseui/block';

import {ThemeProvider, navTheme} from '../../../theme';
import AddCommentModal from './addCommentModal/AddCommentModal';
import DeleteCommentModal from './deleteCommentModal/DeleteCommentModal';
import EditCommentModal from './editCommentModal/EditCommentModal';
import {Button} from '../../../components/button/Button';

export default {
    title: 'Components/Comment modals'
};

const dataId = 123;
const invalidUser = {
    userId: 'test id',
    givenName: 'Name',
    surname: 'Surname',
    initial: 'NS',
    email: 'test.test@test.test'
};
const clientUser = {
    userId: 'Lorem ipsum 1',
    givenName: 'Name',
    surname: 'Surname',
    initial: 'NS',
    email: 'test.test@test.test'
};

const server = 'testServer';
const commentList = [
    {
        id: 1,
        label: 'comment',
        properties: {
            author: 'Lorem ipsum 1',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus molestie lorem, quis ultrices libero commodo vel. Cras vitae mauris porta erat congue rutrum. Integer nec facilisis mi, elementum fringilla tellus. Duis pretium lacinia rutrum. Phasellus porta eget nisi ut sagittis. Cras sollicitudin cursus urna, quis eleifend magna scelerisque sit amet. Integer mi neque, tristique euismod mi a, egestas posuere purus. Aenean interdum odio efficitur, vehicula nisl quis, pellentesque lectus. Donec lobortis accumsan sollicitudin.',
            date: '27.des.2014',
            time: '10:12'
        }
    },
    {
        id: 2,
        label: 'comment',
        properties: {
            author: 'Lorem ipsum 2',
            comment:
                'Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac.',
            date: '17.sep.2013',
            time: '17:42'
        }
    }
];

const commentContent = commentList[0];

export const add_comment_modal = () => {
    const [comments, setComments] = React.useState(commentList);
    const [isAddCommentOpen, setIsAddCommentOpen] = React.useState(false);

    return (
        <ThemeProvider theme={navTheme()}>
            <AddCommentModal
                dataId={dataId}
                comments={comments}
                setComments={setComments}
                isOpen={isAddCommentOpen}
                setIsOpen={setIsAddCommentOpen}
                clientUser={clientUser}
                server={server}
            />
            <Button onClick={() => setIsAddCommentOpen(true)}>Add comment modal</Button>
        </ThemeProvider>
    );
};

export const edit_comment_modal = () => {
    const [comments, setComments] = React.useState(commentList);
    const [isEditCommentOpen, setIsEditCommentOpen] = React.useState(false);
    const [user, setUser] = React.useState(clientUser);

    return (
        <ThemeProvider theme={navTheme()}>
            <EditCommentModal
                isOpen={isEditCommentOpen}
                setIsOpen={setIsEditCommentOpen}
                commentContent={commentContent}
                commentIndex={0}
                comments={comments}
                setComments={setComments}
                clientUser={user}
                server={server}
            />
            <Block>
                <Block marginBottom="scale800">
                    <Button
                        onClick={() => {
                            setIsEditCommentOpen(true);
                            setUser(clientUser);
                        }}
                    >
                        Edit comment modal
                    </Button>
                </Block>
                <Block>
                    <Button
                        onClick={() => {
                            setIsEditCommentOpen(true);
                            setUser(invalidUser);
                        }}
                    >
                        Edit comment modal invalid user
                    </Button>
                </Block>
            </Block>
        </ThemeProvider>
    );
};

export const delete_comment_modal = () => {
    const [comments, setComments] = React.useState(commentList);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
    const [user, setUser] = React.useState(clientUser);

    return (
        <ThemeProvider theme={navTheme()}>
            <DeleteCommentModal
                isOpen={isDeleteModalOpen}
                setIsOpen={setIsDeleteModalOpen}
                index={0}
                commentContent={commentContent}
                comments={comments}
                setComments={setComments}
                clientUser={user}
                server={server}
            />
            <Block>
                <Block marginBottom="scale800">
                    <Button
                        onClick={() => {
                            setIsDeleteModalOpen(true);
                            setUser(clientUser);
                        }}
                    >
                        Delete comment modal
                    </Button>
                </Block>
                <Block>
                    <Button
                        onClick={() => {
                            setIsDeleteModalOpen(true);
                            setUser(invalidUser);
                        }}
                    >
                        Delete comment modal invalid user
                    </Button>
                </Block>
            </Block>
        </ThemeProvider>
    );
};
