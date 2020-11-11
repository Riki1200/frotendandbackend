import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import API from '../../api/index';
import { useFetch } from '../../hooks/useFetch';
import { Msg } from '../../stylesComponents/styles-components';


export const Add = function () {
    const [loading, setLoading] = useState(false);


    const { data, setUser } = useFetch(API.add);



    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const [history, setHistory] = useState('');
    const [url, setUrl] = useState('');
    const handlePrevent = function (ev) {



        ev.preventDefault();




        if (name !== '' && day !== '' && month !== '' && year !== '' && history !== ''
            && url !== '') {



            setUser({
                name: name,
                day: day,
                month: month,
                year: year,
                history: history,
                url: url
            });
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
                <form onSubmit={handlePrevent} method="POST" className='form_add'>
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

                    </div>
                    <div className="form_fields">
                        <h5 className='date_title'> Date </h5>
                        <label htmlFor='day'>
                            Day
                            <input type="text" id='day' name="day" onChange={ev => setDay(ev.target.value)} />
                        </label>

                        <label htmlFor='month'>
                            Month
                             <select
                                required
                                id="month"
                                name="month"
                                onChange={ev => setMonth(ev.target.value)}>
                                <option>Select Month</option>
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
                            onChange={ev => setHistory(ev.target.value)}
                            autoComplete="false"
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
                </form>
                {data.value === true ? <Msg>History add success</Msg> : null}

            </section>
        </>
    );
};
