import React, { useState, useEffect } from 'react';
export function Footer({ styleContext }) {

    const [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return <footer className='footer_content' style={{ ...styleContext }}>
        <div className='footer_child'>
            <h2>NodeJS+SQLite3+ReactJS+ExpressJS</h2>
            <p>NodeJS+SQLite3+ReactJS+ExpressJS</p>
        </div>
        <div className='footer_copy--rigth'>
            &copy; {year} Copyright
        </div>
    </footer>
}