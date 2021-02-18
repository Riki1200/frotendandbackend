import { useState, useEffect } from 'react';


export const useUsers = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);


    useEffect(() => {

        const api = async (url) => {

            let data = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            return await data.json();
        }



        api(url).then(response => {
            console.log(response)
            setData(response);

        }).catch((err) => {
            setError({ err })
        })

    }, [url])

    return { data, error }
};
