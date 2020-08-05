import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function useTags(server, id) {
    const [tags, setTags] = React.useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect((id) => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${server}/node/out/${id}/hasTag`)
                if (typeof response.data === 'object' && response.data !== null) {
                    setTags(response.data)
                }
            } catch (e) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    return [tags, loading, error, setTags];
}

export default useTags;


