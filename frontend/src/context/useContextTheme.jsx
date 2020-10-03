import React, { useState, useContext } from 'react';


const ContextTheme = React.createContext('blueLight');
const ContextUpdateTheme = React.createContext();


export const useTheme = () => useContext(ContextTheme);
export const useThemeUpdate = () => useContext(ContextUpdateTheme);

export const UseThemeContext = ({ children }) => {

    const [theme, setTheme] = useState(false);

    const BlueLight = {
        transition: 'color,background-color linear 200ms,linear 200ms',
        backgroundColor: theme ? '#C8AAE0' : '#252E98',
        color: theme ? '#000' : '#fff'
    }

    return <ContextTheme.Provider value={BlueLight}>
        <ContextUpdateTheme.Provider value={setTheme}>
            {children}
        </ContextUpdateTheme.Provider>
    </ContextTheme.Provider>

}


