import { useState, useEffect } from 'react';

export function usePut(url, id) {
    const [state, setState] = useState(function () {
        return {}
    });

    const [msg, setMsg] = useState({ msg: '' })

    useEffect(() => {

        const putData = async (url) => {

            const data = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });

            return await data.json();
        }


        putData(url + id).then(r => {
            setMsg({ ...r })
        }).catch(e => {
            setMsg({ msg: e })
        })


    }, [url, state, id]);

    return [msg, setState];

}