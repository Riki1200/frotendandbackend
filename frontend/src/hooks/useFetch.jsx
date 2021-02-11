import { useState, useEffect } from "react";

export function useFetch(url, type) {
    const [data, setData] = useState({ msg: '', user: {} });
    const [user, setUser] = useState({} || {})




    useEffect(() => {
        const getHttp = async () => {
            const options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            };
            const api = await fetch(url, options);
            return await api.json();
        };


        getHttp().then(async response => {

            if (type === 'login') {

                let { access_token, refresh_token } = response;

                console.log({ access_token, refresh_token })
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        'Authorization': 'Bearer ' + access_token
                    },
                    body: JSON.stringify({
                        refresh_token: refresh_token
                    })
                }).then(res => res.json())
                    .then(res => {
                        console.log(res)
                        setData(res);
                    })
                    .catch(setData)
            } else {
                setData({ msg: response?.response?.msg });
            }



        });
    }, [user, setUser, url, type])


    return { data, setUser };
}
