import {useEffect, useState} from 'react';
import axios from 'axios';

export function useElasticSearch(server, id) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getHit = (data) => {
        if (!data) return null;
        if (!data._source) return null;
        return data._source;
    };

    const getData = (response) => {
        if (typeof response.data !== 'object') throw Error('No hits');
        return response.data;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get(`${server}/${id}`);
                const data = await getData(result);
                setData(getHit(data));
            } catch (e) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    return [data, loading, error];
}

export default useElasticSearch;
