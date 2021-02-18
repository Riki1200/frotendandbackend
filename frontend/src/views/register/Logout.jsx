import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
//import api from '../../api';
export const LogoutIcon = styled('img')`
    width: 18px;
    
`;



export const LogoutUser = ({ loadStorage }) => {

    const [expire, setExpire] = useState(false);

    useEffect(() => {

        let getStorage = window.localStorage.getItem(window.localStorage.key(0));
        console.log(getStorage)

        if (getStorage !== null) {
            let { dateExpire } = JSON.parse(getStorage);
            setInterval(() => {
                if (Date.now() >= dateExpire) {
                    window.localStorage.clear();
                    window.location.reload();
                    setExpire(true);

                }

            }, 1500);
        }
        return () => {
            clearInterval();
        }
    }, [expire]);




    if (expire === true) {
        return <Redirect to='/' />;
    }
    return (
        <div className='logout_content'>
            <button className="button_logout" onClick={(evt) => {
                loadStorage(evt)
            }}>
                Logout   <LogoutIcon src='/icons/logout.svg' alt='icon' />
            </button>
        </div >
    )

}