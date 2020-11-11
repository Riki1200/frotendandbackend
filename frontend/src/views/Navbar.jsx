import React, { useState, useEffect, useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { buttonContext } from './Header'



export const Navbar = ({ classStyle }) => {

    const UpdateContext = useContext(buttonContext);

    const [t, setT] = useState(false);


    const handleClick = (_ev) => {
        UpdateContext(f => !f);
    }

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
                <NavLink exact to='/system' className='nav__link' activeClassName='nav_link--active'
                >Home</NavLink>
            </li>

            <li className='li__item--nav'>
                <NavLink to='/system/history' className='nav__link' activeClassName='nav_link--active'
                >History</NavLink>
            </li>
            <li className='li__item--nav'>
                <NavLink to='/system/add' className='nav__link' activeClassName='nav_link--active' >Add History</NavLink>
            </li>
            <button className='button_closed' onClick={handleClick}>X</button>
        </ol>
    </nav>
};