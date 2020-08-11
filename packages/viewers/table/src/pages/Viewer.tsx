import React from 'react';
import env from '@beam-australia/react-env';
import {Block} from 'baseui/block';
import {Header, LoadingSpinner} from '@dakan/ui';
import {Metrics} from '@dakan/metrics';
import { useNode, useNodeEdges, useContent } from '@dakan/hooks'

import Content from '../component/Content';
import exampleJson from '../resources/example.json';
import exampleColumnJson from '../resources/exampleColumn.json';
import exampleTags from '../resources/exampleTags.json';
import exampleComments from '../resources/exampleComments.json';
import TableNotFound from '../component/TableNotFound';

const title = env('TITLE') || 'Data';

const Viewer = (props: any) => {

    const [node, loadingNode, errorLoadingNode] = useNode(props.match.params.id)
    const [columns, loadingColumns, errorLoadingColumns] = useNodeEdges(props.match.params.id, 'hasMember')
    const [tagOptions, loadingtagOptions, errorLoadingtagOptions] = useContent('opplysningstype')
    const [comments, loadingCommnets, errorLoadingComments, setComments] = useNodeEdges(props.match.params.id, 'hasComment')

    const getHeader = () => (
        <Header
          config={{
            nav: true,
            about: true,
            showLoginButton: true
          }}
        />
      )
    
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
              setComments={setComments}
            />
          </Block>
        )
      }

    if (loadingNode) {
        return (
            <Block display="flex" justifyContent="center">
                <LoadingSpinner size={96} />
            </Block>
        );
    }

    if (errorLoadingNode && !Object.keys(node).length) {
        return <TableNotFound error={errorLoadingNode} />;
    }

    return (
        <React.Fragment>
            <Header
                config={{
                    brand: title,
                    nav: true,
                    about: true,
                    showLoginButton: true
                }}
            />
            {node && Object.keys(node).length && (
                <Metrics
                    viewer={'tabell'}
                    page={node.id}
                    section={''}
                />
            )}
            {node && (
                <Block>
                    <Block display="flex" justifyContent="flex-end"></Block>
                    <Content
                        data={node}
                        columns={columns}
                        tagOptions={tagOptions}
                        comments={comments}
                        setComments={setComments}
                        numberOfColumns={columns.length}
                    />
                </Block>
            )}
        </React.Fragment>
    );
};
export default Viewer;
