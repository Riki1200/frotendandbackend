import { useState, useEffect } from "react";

export function useFetch(url, type) {
    const [data, setData] = useState({ msg: '' });
    const [user, setUser] = useState({})




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

        console.log(user)
        getHttp().then(async response => {

            if (type === 'login') {

                let { access_token } = response;
                console.log(access_token)
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        'Authorization': 'Bearer ' + access_token
                    }
                }).then(res => res.json())
                    .then(res => {

                        setData({ msg: res?.error?.msg });
                    })
                    .catch(setData)
            } else {
                setData({ response });
            }



        });
    }, [user, setUser, url, type])


    return { data, setUser };
}
