import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import API from '../../api/index';
import { useFetch } from '../../hooks/useFetch';
import { Msg, MsgRegister } from '../../stylesComponents/styles-components';


export const Add = function () {
    const [loading, setLoading] = useState(false);

    const [msg, setMsg] = useState(false);
    const { data, setUser } = useFetch(API.add);

    const [validate, setValidate] = useState(false);

    const [name, setName] = useState('');
    const [history, setHistory] = useState('');
    const [url, setUrl] = useState('');



    const handlePrevent = (ev) => {



        ev.preventDefault();




        if (name !== '' && history !== '' && url !== '') {



            setUser({
                name: name,
                history: history,
                url: url
            });

            setMsg(true);

            console.log(data)

        } else {
            setValidate(true);



            setInterval(() => {
                setValidate(false);
            }, 2500);
        }


        setLoading(!loading);
        ev.target.reset();

    };



    let maxLengthLetters = 600;


    return (
        <>
            <Helmet>
                <title>Añadir historia | Add History</title>
                <meta name="author" content="RomeoDev" />
                <meta
                    name="description"
                    content="Añadir usuarios para llenar las historia y verificar si la historia es hermosa o  una mierda"
                />
                <meta
                    name="keywords"
                    content="ReactJS, 
                             SQLite, 
                             NodeJS, 
                             CRUD, 
                             Google Chrome"
                />
            </Helmet>
            <section className="section_add--content">
                <form
                    onSubmit={handlePrevent} method="POST" className='form_add'>
                    <div className="form_fields">
                        <label htmlFor='name'>
                            Name the person
                            </label>
                        <input
                            name="name"
                            type="text"
                            id='name'
                            onChange={ev => setName(ev.target.value)}
                            autoComplete="off"
                        />
                        {validate ? <MsgRegister error='#e65050'>Cannot empty</MsgRegister> : null}
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
                            onChange={ev => setHistory(ev.target.value)}
                            autoComplete="false"
                            maxLength={maxLengthLetters}
                        ></textarea>
                        {validate ? <MsgRegister error='#e65050'>Cannot empty</MsgRegister> : null}
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
                        {validate === '' ? <MsgRegister error='#e65050'>Cannot empty</MsgRegister> : null}
                    </div>
                    <div className="form_fields">
                        <input type="submit" value="Add" />
                    </div>
                </form>
                {msg === true ? <Msg>History add success</Msg> : null}

            </section>
        </>
    );
};
