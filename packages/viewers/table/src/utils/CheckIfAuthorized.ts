import env from '@beam-australia/react-env';

const server = env('SERVER');

const CheckIfAuthorized = (ClientUser: any, TokenId: any, func: any) => {
    if (!ClientUser && !TokenId) {
        return window.location.replace(`${server}/login?redirect_url=${window.location.href}`);
    } else {
        return func();
    }
};
export default CheckIfAuthorized;
