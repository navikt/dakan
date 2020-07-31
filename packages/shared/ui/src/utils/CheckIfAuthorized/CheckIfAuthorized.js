import Cookies from 'js-cookie';

export const CheckIfAuthorized = (serverUrl, func) => {
    const clientUser = Cookies.get('ClientUser');
    const tokenId = Cookies.get('ClientToken');

    if (clientUser && tokenId) {
        return func();
    } else {
        return window.location.replace(`${serverUrl}/login?redirect_url=${window.location.href}`);
    }
};
export default CheckIfAuthorized;
