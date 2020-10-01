import React from 'react';

import { NavLink } from 'react-router-dom';


export const Navbar = () => (
    <nav className='nav__content--nav'>
        <ol className='nav__list--content'>
            <li className='li__item--nav'>
                <NavLink exact to='/system' className='nav__link' activeClassName='nav_link--active'
                >Home</NavLink>
            </li>

            <li className='li__item--nav'>
                <NavLink to='/system/history' className='nav__link' activeClassName='nav_link--active'>History</NavLink>
            </li>
            <li className='li__item--nav'>
                <NavLink to='/system/add' className='nav__link' activeClassName='nav_link--active'>Add History</NavLink>
            </li>
        </ol>
    </nav>
);