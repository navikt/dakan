import React from 'react';
import env from '@beam-australia/react-env';
import {useElasticSearch, Metrics} from '@dakan/ui';

import Content from '../components/Content';

import exampleJson from '../resources/example.json';

const server = env('SERVER');
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID');
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT');
const gt = env('GTM_ID');

const Viewer = (props: any) => {
    const [data, loading, error] = useElasticSearch(server, props.match.params.id);
    const [page, setPage] = React.useState('');

    React.useEffect(() => {
        if (data !== undefined) {
            setPage(data.content.person);
        }
    }, [data]);

    if (props.match.params.id === 'test') {
        return <Content {...props} item={exampleJson._source.content} />;
    }

    return (
        <React.Fragment>
            {error}
            {data && data.content && (
                <React.Fragment>
                    <Metrics
                        gt={gt}
                        amplitude_project_id={amplitude_project_id}
                        amplitude_endpoint={amplitude_endpoint}
                        viewer={'person'}
                        page={page}
                        section={''}
                    />
                    <Content {...props} item={data.content} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Viewer;
