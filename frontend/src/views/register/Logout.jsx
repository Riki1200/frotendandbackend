import React from 'react';
import styled from 'styled-components';
export const LogoutIcon = styled('img')`
    width: 18px;
    filter: invert(100%);
`;
export const LogoutUser = ({ loadStorage }) => {
    return <div className='logout_content'>
        <button className="button_logout" onClick={loadStorage}>

            Logout   <LogoutIcon src='/icons/logout.svg' alt='icon' />
        </button>

    </div >
}