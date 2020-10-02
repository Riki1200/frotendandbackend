import React, { useState, useContext } from 'react';


const ContextTheme = React.createContext('blue_ligth');
const ContextUpdateTheme = React.createContext();


export const useTheme = () => useContext(ContextTheme);
export const useThemeUpdate = () => useContext(ContextUpdateTheme);

export const UseThemeContext = ({ children }) => {

    const [theme, setTheme] = useState(false);

    const BlueLight = {
        backgroundColor: theme ? '#2CA2FF' : '#000068',
        color: theme ? '#000' : '#fff'
    }

    return <ContextTheme.Provider value={theme, BlueLight}>
        <ContextUpdateTheme.Provider value={setTheme}>
            {children}
        </ContextUpdateTheme.Provider>
    </ContextTheme.Provider>

}


