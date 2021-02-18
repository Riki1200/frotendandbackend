import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { LogoutUser } from './register/Logout';
import { Redirect } from 'react-router-dom'

export const buttonContext = React.createContext();


export const Header = function () {



    const [vali, setVali] = useState(false);


    const AddClass = (e) => {
        e.stopPropagation();
        e.persist()
        setVali(r => !r);
    }

    useEffect(() => {

    }, [vali])
    const [state, setState] = useState(false);
    const loadStorage = function () {
        if (window.localStorage.key(0)) {
            window.localStorage.clear();
            setState(r => !r);
        }
    }
    if (state) return <Redirect to='/' />
    return <>
        <header className='header_content'>
            <div className='header_title'>
                <h2 className='title'>History</h2>
            </div>
            <button className="menu_push" style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none"
            }} onClick={AddClass}>
                <img
                    src='/icons/nav.png'
                    alt='nav'
                    style={{ maxWidth: "60px" }} />
            </button>
            <buttonContext.Provider value={setVali}>
                <Navbar classStyle={vali ? 'nav_responsive' : ''} />
            </buttonContext.Provider>
            <LogoutUser loadStorage={loadStorage} />
        </header >
    </>
}