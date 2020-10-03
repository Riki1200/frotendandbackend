import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { LogoutUser } from './register/Logout';
import { Redirect } from 'react-router-dom'



export const Header = function ({ styleContext }) {
    const [state, setState] = useState(false);
    const loadStorage = function () {
        if (window.localStorage.key(0)) {
            window.localStorage.clear();
            setState(r => !r);
        }
    }
    if (state) {
        return <Redirect to='/' />
    }
    return <header className='header_content' style={{ ...styleContext }} >
        <div className='header_title'>
            <h2 className='title'>ReactNode</h2>
        </div>
        <Navbar />
        <LogoutUser loadStorage={loadStorage} />
    </header >

}