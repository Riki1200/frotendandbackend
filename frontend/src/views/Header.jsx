import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { LogoutUser } from './register/Logout';
import { Redirect } from 'react-router-dom'
import { ButtonThemeOne, BoxTheme } from '../stylesComponents/styles-components';
import { useThemeUpdate } from '../context/useContextTheme';

export const Header = function ({ styleContext }) {
    let updateTheme = useThemeUpdate();
    const HandleTheme = () => {
        updateTheme(r => ~r);
    }

    const [state, setState] = useState(false);
    const loadStorage = function () {
        if (window.localStorage.key(0)) {
            window.localStorage.clear();
            setState(r => !r);
        }
    }
    if (state) return <Redirect to='/' />
    return <>
        <header className='header_content'
            style={{
                borderBottom: ` 1px solid ${styleContext.color}`,
                ...styleContext
            }} >
            <div className='header_title'>
                <h2 className='title'
                    style={{
                        color: styleContext.color,
                        borderBottom: styleContext.color
                    }}>ReactNode</h2>
            </div>
            <Navbar />
            <LogoutUser loadStorage={loadStorage} />
            <BoxTheme bg='#3540AF'>
                <ButtonThemeOne
                    bg={styleContext.backgroundColor}
                    onClick={HandleTheme} />
            </BoxTheme>
        </header >
    </>
}