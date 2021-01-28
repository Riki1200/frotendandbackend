import React, { useState, useContext, useEffect } from 'react';


const ContextTheme = React.createContext('blueLight');
const ContextUpdateTheme = React.createContext();


export const useTheme = () => useContext(ContextTheme);
export const useThemeUpdate = () => useContext(ContextUpdateTheme);


export const UseThemeContext = ({ children }) => {

    const [theme, setTheme] = useState(false);
    const [local, setLocal] = useState({});

    useEffect(() => {

        let BlueDark = {
            transition: 'background-color,color linear 180ms,linear 200ms',
            backgroundColor: '#fff',
            color: '#000'
        }
        let BlueLight = {
            transition: 'color,background-color linear 180ms,linear 200ms',
            backgroundColor: '#000',
            color: '#fff'
        }
        localStorage.setItem('theme', JSON.stringify(theme ? BlueLight : BlueDark))

        if (window.localStorage.getItem('theme')) {
            let localTheme = JSON.parse(localStorage.getItem('theme'))
            setLocal(localTheme);
        }
    }, [theme])



    return (
        <ContextTheme.Provider value={local}>
            <ContextUpdateTheme.Provider value={{ setTheme, setLocal }}>
                {children}
            </ContextUpdateTheme.Provider>
        </ContextTheme.Provider>
    )
}


