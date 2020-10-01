import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState({ value: null });
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
        getHttp().then(response => {
            setData({ value: response.value });
        })
    }, [user, setUser, url])


    return { data, setUser };
}
