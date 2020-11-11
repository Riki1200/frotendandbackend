import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from 'react-router-dom';
import API from '../../api/index';
import { usePut } from '../../hooks/usePut';
import { Msg } from "../../stylesComponents/styles-components";




export const Edit = function () {

    const [massages, setMsg] = useState(false);
    const [loading, setLoading] = useState(false);


    const { id } = useParams();




    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [history, setHistory] = useState('');
    const [url, setUrl] = useState('');

    const [msg, setState] = usePut(API.update, id)


    const handlePrevent = function (ev) {

        ev.preventDefault();
        setLoading(!loading);


        if (name && day && month && year && history && url) {
            setState({
                name: name,
                day: day,
                month: month,
                year: year,
                history: history,
                url: url
            });
            setMsg(false);
            ev.target.reset();
        } else {
            setMsg(true);
        }




    };



    let maxLengthLetters = 600;


    return (
        <>
            <Helmet>
                <title>Actualizar historia | Update History</title>
                <meta name="author" content="RomeoDev" />
                <meta
                    name="description"
                    content="Update history users"
                />
                <meta
                    name="keywords"
                    content="ReactJS, SQLite, NodeJS, CRUD, Google Chrome"
                />
            </Helmet>
            <section className="section_add--content">
                <Link to='/system/history'
                    style={{
                        border: "1px solid #000",
                        padding: "10px 50px",
                        position: "fixed",
                        top: 60,
                        left: 0,
                        zIndex: 1,
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        color: '#fff',
                        backgroundColor: '#000',
                        display: 'flex',
                        alignItems: "center ",
                        gap: "10px",
                        justifyContent: 'center'
                    }}>
                    <div>{'Back'}</div>
                    <img src='/icons/back.png' width='20' alt='back' />
                </Link>
                <form onSubmit={handlePrevent} className='form_add'>
                    <div className="form_fields">
                        <label htmlFor='name'>
                            Name the person
                            </label>
                        <input
                            name="name"
                            type="text"
                            id='name'
                            autoComplete="off"
                            onChange={ev => setName(ev.target.value)} />
                    </div>
                    <div className="form_fields">
                        <h5 className='date_title'> Date </h5>
                        <label htmlFor='day'>
                            Day
                            <input
                                type="text"
                                id='day'
                                name="day"
                                onChange={ev => setDay(ev.target.value)} />
                        </label>

                        <label htmlFor='month'>
                            Month
                             <select
                                required
                                id="month"
                                name="month"
                                onChange={ev => setMonth(ev.target.value)}>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>
                        <label htmlFor='age'>
                            Year
                            <input
                                type="text"
                                id='age'
                                name="year"
                                onChange={ev => setYear(ev.target.value)} />
                        </label>

                    </div>
                    <div className="form_fields">
                        <label htmlFor='history'  >
                            History
                        </label>
                        <div className='len_text'>{history.length}/{maxLengthLetters}</div>
                        <textarea
                            id='history'
                            name="history"
                            placeholder="History..."

                            autoComplete="false"
                            onChange={ev => setHistory(ev.target.value)}
                            maxLength={maxLengthLetters}
                        ></textarea>

                    </div>
                    <div className="form_fields">
                        <label htmlFor='url'>
                            Image of the person
                           </label>
                        <input
                            type='text'
                            id='url'

                            onChange={ev => setUrl(ev.target.value)}
                            name='url' />

                    </div>
                    <div className="form_fields">
                        <input type="submit" value="Add" />
                    </div>
                    {massages ? <Msg type='0'>No puede dejar los campos vacios para la actualizacion</Msg> : null}
                    {msg.msg ? <Msg type='1'>History update is success</Msg> : null}
                </form>
            </section>
        </>
    );
};