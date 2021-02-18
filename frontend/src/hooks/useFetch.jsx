import { useState, useEffect } from "react";

export function useFetch(url, type) {
    const [data, setData] = useState({});
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false);



    useEffect(() => {


        /**
         * @returns {Promise}
         */
        const getHttp = async () => {
            /**
             * @type {RequestInit}
             */
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

                if (response?.value !== undefined) {

                    setData({ msg: response?.msg, value: true })

                } else {
                    let { access_token, refresh_token } = response;
                    console.log(response)
                    if (access_token && refresh_token) {
                        setLoading(true)
                        fetch(url, {
                            method: "GET",
                            headers: {
                                "Content-type": "application/json",
                                'Authorization': 'Bearer ' + access_token
                            }
                        }).then(res => res.json())
                            .then(res => {
                                console.log(res)
                                if (Object.keys(res).indexOf('user') !== -1) {
                                    setData({
                                        username: res.user.username,
                                        email: res.user.email,
                                        dateExpire: res.user.dateExpire,
                                        refreshToken: refresh_token
                                    });

                                } else {
                                    setData({ msg: res?.msg.msg });
                                }
                                setTimeout(() => setLoading(false), 3000);
                            })
                            .catch(error => {
                                setLoading(false)
                                console.log(error)
                                setData(error)
                            })

                    }


                }
            } else {

                let { msg } = response;

                setData({ msg: msg });
            }



        });

    }, [type, url, user])


    return { data, setUser, loading };
}
