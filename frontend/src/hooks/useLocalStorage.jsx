import { useState, useEffect } from 'react';


export const useLocalStorage = (item) => {
    const [registerUser, setStorage] = useState(false);
    const [token, setToken] = useState('');



    useEffect(() => {
        const LocalStorage = () => {

            if (registerUser) {
                window.localStorage.setItem('akt-login', JSON.stringify({
                    value: {
                        user: item.name,
                        emailHash: item.email
                    },
                    refresh_token: token,
                    dateExpire: item.DateExpire
                }));
            }




        }
        LocalStorage();
        return () => {
            let getTimer = window.localStorage.key(0);
            let getStore = window.localStorage.getItem(getTimer)
            if (getStore) {
                let { dateExpire } = JSON.parse(getStore);
                if (Date.now() >= dateExpire) {
                    return window.localStorage.clear();
                }
            }

        }
    }, [registerUser, item, token, setToken])

    return [setStorage, setToken];

}