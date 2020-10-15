import React, { useState, useEffect } from 'react';
export function Footer({ styleContext }) {
    const HandleScroll = (element) => {
        element.persist();
        window.location.href = "#";
        window.location.pathname.replace("#", '')
        console.log(element)
    }
    const [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return <>
        <footer
            className='footer_content'
            style={{ ...styleContext, borderTop: `${styleContext.color} solid 1px` }}>
            <div
                className='footer_child'>
                <h2>NodeJS+SQLite3+ReactJS+ExpressJS</h2>
                <p>NodeJS+SQLite3+ReactJS+ExpressJS</p>
            </div>
            <div
                className='footer_copy--rigth'>
                &copy; {year} Copyright
            </div>
            <button
                className='splash_top'
                onClick={HandleScroll}
                style={{ ...styleContext }}>
                <span>TOP</span>&#9650;
            </button>
        </footer>
    </>
}