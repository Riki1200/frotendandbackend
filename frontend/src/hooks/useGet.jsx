import { useState, useEffect } from 'react';


export const useUsers = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const api = async (url) => {
        let header = new Headers();
        header.set('Content-Type', 'application/json');
        header.set('Accept-Charset', 'utf-8');
        let data = await fetch(url, {
            method: 'GET',
            headers: header
        })

        return data.json();
    }

    useEffect(() => {
        api(url).then(response => {

            setData(response);

        }).catch((err) => {
            setError({ err })
        })

    }, [url])

    return { data, error }
};
