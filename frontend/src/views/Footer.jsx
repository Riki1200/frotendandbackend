import React, { useState, useEffect } from 'react';
export function Footer() {
    const HandleScroll = (element) => {
        element.persist();
        window.location.href = "#";
        window.location.pathname.replace("#", '')

    }
    const [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return <>
        <footer className='footer_content'>
            <div
                className='footer_child'>
                <p>NodeJS+SQLite3+ReactJS+ExpressJS</p>
            </div>
            <div
                className='footer_copy--rigth'>
                &copy; {year} Copyright
            </div>
            <button className='splash_top' onClick={HandleScroll}>
                <span>TOP</span>
                &#9650;
            </button>
        </footer>
    </>
}