const HandleAxiosError = (error: any, setError: Function) => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setError(`${error.response.status} ${error.response.statusText}`);
    } else {
        console.log(error);
        console.log(error.status);
        console.log(error.message);
        setError(error.message);
    }
};
export default HandleAxiosError;
