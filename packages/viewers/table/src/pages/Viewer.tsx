import React from 'react';
import env from '@beam-australia/react-env';
import {Block} from 'baseui/block';
import {Header, LoadingSpinner} from '@dakan/ui';
import {Metrics} from '@dakan/metrics';
import {useNode, useNodeEdges, useContent} from '@dakan/hooks';

import Content from '../component/Content';
import exampleJson from '../resources/example.json';
import exampleColumnJson from '../resources/exampleColumn.json';
import exampleTags from '../resources/exampleTags.json';
import exampleComments from '../resources/exampleComments.json';
import exampleDescription from '../resources/exampleDescription.json';
import TableNotFound from '../component/TableNotFound';

const title = env('TITLE') || 'Data';

const Viewer = (props: any) => {
    const [node, loadingNode, errorLoadingNode, errorMessage] = useNode(props.match.params.id);
    const [columns, loadingColumns, errorLoadingColumns] = useNodeEdges(props.match.params.id, 'hasMember');
    const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent('opplysningstype');
    const [ratings, loadingRatings, errorLoadingRatings, setRatings] = useNodeEdges(
        props.match.params.id,
        'hasTableRating'
    );
    const [comments, loadingCommnets, errorLoadingComments, setComments] = useNodeEdges(
        props.match.params.id,
        'hasTableComment'
    );

    const [description, loadingDescription, errorLoadingDescription, setDescription] = useNodeEdges(
        props.match.params.id,
        'hasTableDescription'
    );

    const [personTags, loadingPersonTags, errorLoadingPersonTags, setPersonTags] = useNodeEdges(
        props.match.params.id,
        'hasTablePersonTag'
    );

    const getHeader = () => (
        <Header
            config={{
                nav: true,
                about: true,
                showLoginButton: true,
            }}
        />
    );

    const sortNodesByPropertyTime = (data: any) => {
        return data.sort((a: any, b: any) => {
            if (a.properties.date + 't' + a.properties.time < b.properties.date + 't' + b.properties.time) {
                return 1;
            }
            if (a.properties.date + 't' + a.properties.time > b.properties.date + 't' + b.properties.time) {
                return -1;
            }
            return 0;
        });
    };

    if (props.match.params.id === 'test') {
        return (
            <Block>
                {getHeader()}
                <Content
                    {...props}
                    data={exampleJson}
                    columns={exampleColumnJson}
                    tagOptions={exampleTags}
                    numberOfColumns={exampleColumnJson.length}
                    comments={exampleComments}
                    description={exampleDescription}
                    setComments={setComments}
                    setDescription={setDescription}
                    personTags={personTags}
                    setPersonTags={setPersonTags}
                />
            </Block>
        );
    }

    if (loadingNode) {
        return (
            <Block display="flex" justifyContent="center">
                <LoadingSpinner size={96} />
            </Block>
        );
    }

    if (errorLoadingNode && !Object.keys(node).length) {
        return <TableNotFound error={errorMessage} />;
    }

    return (
        <React.Fragment>
            {getHeader()}
            {node && node.properties && (
                <React.Fragment>
                    <Metrics viewer={'tabell'} page={node.id} section={''} />
                    <Block>
                        <Block display="flex" justifyContent="flex-end"></Block>
                        <Content
                            data={node}
                            columns={columns}
                            tagOptions={tagOptions}
                            comments={comments && comments.length > 0 && sortNodesByPropertyTime(comments)}
                            setComments={setComments}
                            description={description}
                            setDescription={setDescription}
                            numberOfColumns={columns && columns.length}
                            ratings={ratings}
                            setRatings={setRatings}
                            personTags={personTags}
                            setPersonTags={setPersonTags}
                        />
                    </Block>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
export default Viewer;
