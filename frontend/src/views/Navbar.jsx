import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/useContextTheme';

export const Navbar = ({ classStyle }) => {
    let themeProvider = useTheme();

    const [t, setT] = useState(false);




    useEffect(() => {
        const Load = () => {
            window.matchMedia("(min-width:968px)").addEventListener("change", (match) => {
                if (match.matches) {
                    setT(true);
                } else {
                    setT(false);
                }
            })
        }


        Load();


    }, [t])


    return <nav className={`nav__content--nav  ${classStyle}`}>
        <ol className='nav__list--content'>
            <li className='li__item--nav'>
                <NavLink exact to='/system' style={{ color: t ? "#fff" : themeProvider.color }} className='nav__link' activeClassName='nav_link--active'
                >Home</NavLink>
            </li>

            <li className='li__item--nav'>
                <NavLink to='/system/history' className='nav__link' activeClassName='nav_link--active'
                    style={{ color: t ? "#fff" : themeProvider.color }} >History</NavLink>
            </li>
            <li className='li__item--nav'>
                <NavLink to='/system/add' className='nav__link' activeClassName='nav_link--active' style={{
                    color: t ? "#fff" : themeProvider.color
                }} >Add History</NavLink>
            </li>
        </ol>
    </nav>
};