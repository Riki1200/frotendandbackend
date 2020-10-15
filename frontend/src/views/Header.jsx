import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { LogoutUser } from './register/Logout';
import { Redirect } from 'react-router-dom'
import { ButtonThemeOne, BoxTheme } from '../stylesComponents/styles-components';
import { useThemeUpdate } from '../context/useContextTheme';

export const Header = function ({ styleContext }) {



    const [vali, setVali] = useState(false);
    let { setTheme, setLocal } = useThemeUpdate();
    const [checked, setCheck] = useState(false);

    let BlueDark = {
        transition: 'color,background-color linear 180ms,linear 200ms',
        backgroundColor: '#fff',
        color: '#000'
    }
    const HandleTheme = (el) => {

        el.preventDefault();
        setCheck(r => !r);
        setTheme(r => {
            if (window.localStorage.getItem('theme') !== null) {
                window.localStorage.setItem('theme', JSON.stringify(BlueDark));
                let ThemeJSON = JSON.parse(localStorage.getItem('theme'));
                setLocal(ThemeJSON)
                return !r;
            } else {
                return r;
            }
        });

    }

    const AddClass = (e) => {
        e.stopPropagation();
        console.log(e);
        e.persist()
        setVali(r => !r);

    }


    useEffect(() => {
        // if (vali) {
        document.body.children[1].children[0].style.backgroundColor = "hsla(0, 0%, 0%, 0.58)";
        //  }

        window.matchMedia("(max-width:650px)").addEventListener('change', function (e) {
            console.log(document.body.children[1].children[0])

            if (vali) {
                document.body.children[1].children[0].style.backgroundColor = "hsla(0, 0%, 0%, 0.50)";
            }
        })

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
        <header className='header_content'
            style={{
                borderBottom: ` .1px solid ${styleContext.color}`,
                ...styleContext
            }}

        >
            <div className='header_title'>
                <h2 className='title'
                    style={{
                        color: styleContext.color,
                        borderBottom: styleContext.color
                    }}>History</h2>
            </div>
            <button className="menu_push" style={{
                backgroundColor:
                    "transparent", outline:
                    "none", border:
                    "none"
            }} onClick={AddClass}>
                <img src='/icons/nav.png' alt='nav' style={{ maxWidth: "60px", filter: `${styleContext.color !== '#fff' ? 'invert(0)' : "invert(1.0)"}` }} />
            </button>
            <Navbar classStyle={vali ? 'nav_responsive' : ''} />
            <LogoutUser loadStorage={loadStorage} />
            <BoxTheme bg={styleContext.backgroundColor} style={{ filter: "invert(1.0)" }}>
                <ButtonThemeOne
                    className='btn_theme'
                    style={{ filter: "invert(1.0)" }}
                    bg={styleContext.backgroundColor}
                    onClick={HandleTheme}
                    checked={checked} />
            </BoxTheme>
        </header >
    </>
}