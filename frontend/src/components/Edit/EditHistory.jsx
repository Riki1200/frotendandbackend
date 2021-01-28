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
    const [history, setHistory] = useState('');
    const [url, setUrl] = useState('');

    const [msg, setState] = usePut(API.update, id)


    const handlePrevent = function (ev) {

        ev.preventDefault();
        setLoading(!loading);


        if (name && history && url) {
            setState({
                name: name,
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
                        padding: "10px 40px",
                        position: "sticky",
                        bottom: "120px",

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