import { useState, useEffect } from 'react';


export const useLocalStorage = (item) => {
    const [registerUser, setStorage] = useState(false);
    useEffect(() => {
        const LocalStorage = () => {

            if (registerUser) {
                window.localStorage.setItem('akt-login', JSON.stringify({
                    value: registerUser,
                    token: item,
                    dateExpire: Date.now() + 160000
                }));
            }

        }
        LocalStorage();
        return function () {
            let getTimer = window.localStorage.key(0);
            let getStore = window.localStorage.getItem(getTimer)
            if (getStore) {
                let { dateExpire } = JSON.parse(getStore);
                if (Date.now() >= dateExpire) {
                    return window.localStorage.clear();
                }
            }

        }
    })

    return [setStorage];

}