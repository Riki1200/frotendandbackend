import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
export const LogoutIcon = styled('img')`
    width: 18px;
    filter: invert(100%);
`;



export const LogoutUser = ({ loadStorage }) => {

    const [expire, setExpire] = useState(false);

    /*useEffect(() => {

        let getStorage = window.localStorage.getItem(window.localStorage.key(0));
        console.log(getStorage)

        if (getStorage !== null) {
            let { dateExpire } = JSON.parse(getStorage);
            setInterval(() => {
                if (Date.now() >= dateExpire) {
                    window.localStorage.clear();
                    window.location.reload();
                    setExpire(true);
                    console.log(expire)
                }
            }, 1500);
        }
    }, [expire]);
*/
    if (expire === true) {
        return <Redirect to='/' />;
    }
    return (
        <div className='logout_content'>
            <button className="button_logout" onClick={loadStorage}>
                Logout   <LogoutIcon src='/icons/logout.svg' alt='icon' />
            </button>
        </div >
    )

}