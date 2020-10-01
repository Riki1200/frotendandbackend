import React from 'react';



export function Footer(){
    return <footer className='footer_content'>
        <div className='footer_child'>
            <h2>NodeJS+SQLite3+ReactJS+ExpressJS</h2>
            <p>Esto es una aplicacion web que funciona bajo NodeJS+SQLite3+ReactJS+ExpressJS</p>
        </div>
        <div className='footer_copy--rigth'>
            &copy; {new Date().getFullYear()} Copyright 
        </div>
    </footer>
}