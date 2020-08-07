import React from 'react';
import HandleAxiosError from '../utils/HandleAxiosError';
import env from '@beam-australia/react-env';
import axios from 'axios';
import {Spinner} from 'baseui/spinner';
import {Block} from 'baseui/block';
import Cookies from 'js-cookie';
import {Header} from '@dakan/ui';
import {Metrics} from '@dakan/metrics';

import Content from '../component/Content';
import exampleJson from '../resources/example.json';
import exampleColumnJson from '../resources/exampleColumn.json';
import exampleTags from '../resources/exampleTags.json';
import exampleComments from '../resources/exampleComments.json';
import TableNotFound from '../component/TableNotFound';

const server = env('SERVER');
const title = env('TITLE') || 'Data';
const link = env('HOME_URL') || '../';
const amplitude_project_id = env('AMPLITUDE_PROJECT_ID');
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT');
const gt = env('GTM_ID');

const Viewer = (props: any) => {
    const [data, setData] = React.useState({});
    const [columns, setColumns] = React.useState([{}]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = React.useState(null);
    const [tagOptions, setTagOptions] = React.useState([{}]);
    const [numberOfColumns, setNumberOfColumns] = React.useState(0);
    const [showSpinner, setShowSpinner] = React.useState(true);
    const [clientUser, setClientUser] = React.useState({});
    const [comments, setComments] = React.useState([{}]);
    const [page, setPage] = React.useState('');

    const {id} = props.match.params;

    const handleGetEdgesResponse = (response: any) => {
        if (typeof response.data === 'object' && response.data !== null) {
            setColumns(response.data);
            setNumberOfColumns(response.data.length);
            setShowSpinner(false);
        } else {
            setError(response);
            setShowSpinner(false);
        }
    };

    const handleGetCommentsResponse = (response: any) => {
        if (typeof response.data === 'object' && response.data !== null) {
            const commentList = [...response.data].sort((a, b) => {
                if (a.properties.date + 't' + a.properties.time < b.properties.date + 't' + b.properties.time) {
                    return 1;
                }
                if (a.properties.date + 't' + a.properties.time > b.properties.date + 't' + b.properties.time) {
                    return -1;
                }
                return 0;
            });
            setComments(commentList);
        } else {
            setError(response);
        }
    };

    const handleGetIndexResponse = (response: any) => {
        if (typeof response === 'object' && response !== null) {
            setData(response);
            if (response.id) {
                axios
                    .get(`${server}/node/out/${id}/hasMember`)
                    .then(handleGetEdgesResponse)
                    .catch((e) => HandleAxiosError(e, setError));
                axios
                    .get(`${server}/node/out/${id}/hasComment`)
                    .then(handleGetCommentsResponse)
                    .catch((e) => HandleAxiosError(e, setError));
            }
            setPage(response.properties.table_name);
        } else {
            setError(response);
        }
    };

    const handleGetInformationTypeResponse = async (response: any) => {
        if (typeof response === 'object' && response !== null) {
            setTagOptions(response);
        } else {
            setError(response);
        }
    };

    const getAzureAuth = () => {
        const tokenId = Cookies.get('ClientToken');
        const clientUser = Cookies.get('ClientUser');
        if (tokenId && clientUser) {
            setClientUser(JSON.parse(clientUser.replace(/\\054/g, ',').replace(/\\"/g, '"')));
        }
    };

    React.useEffect(() => {
        if (id === 'test' || id === 'test.test') {
            setData(exampleJson);
            setComments(exampleComments);
            setColumns(exampleColumnJson);
            setTagOptions(exampleTags);
            setNumberOfColumns(exampleColumnJson.length);
            setShowSpinner(false);
            getAzureAuth();
        } else {
            axios
                .get(`${server}/node/${id}`)
                .then((response: any) => handleGetIndexResponse(response.data))
                .catch((e) => {
                    HandleAxiosError(e, setError);
                    setShowSpinner(false);
                });
            axios
                .get(`${server}/nodes/opplysningstype`)
                .then((response: any) => handleGetInformationTypeResponse(response.data))
                .catch((e) => HandleAxiosError(e, setError));
            getAzureAuth();
        }
    }, [id]);

    if (showSpinner) {
        return (
            <Block display="flex" justifyContent="center">
                <Spinner size={96} />
            </Block>
        );
    }

    if (error && !Object.keys(data).length) {
        return <TableNotFound error={error} />;
    }

    return (
        <React.Fragment>
            <Header
                config={{
                    brand: title,
                    nav: true,
                    about: true,
                    aboutLink: 'https://data.nav.no/about',
                    link: link,
                    showLoginButton: true,
                    clientUser: clientUser,
                    server: server,
                }}
            />
            {data && Object.keys(data).length && (
                <Metrics
                    gt={gt}
                    amplitude_project_id={amplitude_project_id}
                    amplitude_endpoint={amplitude_endpoint}
                    viewer={'tabell'}
                    page={page}
                    section={''}
                />
            )}
            {data && (
                <Block>
                    <Block display="flex" justifyContent="flex-end"></Block>
                    <Content
                        data={data}
                        columns={columns}
                        tagOptions={tagOptions}
                        comments={comments}
                        setComments={setComments}
                        numberOfColumns={numberOfColumns}
                        clientUser={clientUser}
                    />
                </Block>
            )}
        </React.Fragment>
    );
};
export default Viewer;
