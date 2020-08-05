import env from '@beam-australia/react-env';

const amplitude_endpoint = env('AMPLITUDE_ENDPOINT');

const AmplitudeConfig = {
    apiEndpoint: amplitude_endpoint,
    saveEvents: true,
    includeUtm: true,
    includeReferrer: true,
    trackingOptions: {
        city: false,
        ip_address: false,
    },
};

export default AmplitudeConfig;
