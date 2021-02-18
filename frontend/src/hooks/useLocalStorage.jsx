import { useState, useEffect } from 'react';




export const useLocalStorage = () => {
    const [valid, setValid] = useState(false);



    const [user, setUserStorage] = useState({});



    useEffect(() => {
        const LocalStorage = () => {



            if (valid) {
                window.localStorage.setItem('akt-login', JSON.stringify({
                    user: user.username,
                    email: user.email,
                    refresh_token: user.refreshToken,
                    dateExpire: user.dateExpire
                }));
            }




        }
        LocalStorage();
        return () => {

            setUserStorage({})
            setValid(false);
        }
    }, [valid, setValid, user, setUserStorage])

    return [setUserStorage, setValid];

}