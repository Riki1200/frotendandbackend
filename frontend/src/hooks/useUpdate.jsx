import { useEffect, useState } from 'react';


export const useUpdate = (url, defaultValue = { name: null, history: null }) => {
    const [update, setUpdate] = useState(defaultValue);
    const [error, setError] = useState({})

    const updateData = async (url) => {
        let data = await fetch(url);
        return await data.json()
    }

    useEffect(() => {
        updateData(url).then(resp => {
            setUpdate(resp);
        }).catch(resp => {
            setError({ error: resp, status: null });
        })
    }, [url])
    return { update, error };
}

