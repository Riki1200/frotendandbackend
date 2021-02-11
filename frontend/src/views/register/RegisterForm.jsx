import React, { useState, useEffect } from "react";

import API from '../../api/index';
import { useFetch } from "../../hooks/useFetch";
import { MsgRegister } from '../../stylesComponents/styles-components'




export const FormRegister = () => {
    const [state, setState] = useState(false);
    const { data, setUser } = useFetch(API.register, 'register');
    const [email, setEmail] = useState(false);


    const [month, setMonth] = useState([])

    const [YearState, setYearState] = useState([])

    let { msg } = data;


    const HandleSubmit = function (evt) {
        evt.preventDefault();


        let formData = new FormData(evt.target);

        console.log(formData.get('name'), formData.get('email'))

        let el = evt.target;
        if (formData.get('name') !== ""
            && formData.get('password') !== ""
            && formData.get('email') !== ""
            && formData.get('year') !== ""
            && formData.get('day') !== ""
            && formData.get('month') !== "") {

            const validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g

            let date = {
                day: formData.get('day'),
                month: formData.get('month'),
                year: formData.get('year')
            };

            let val = validateEmail.test(formData.get('email'))
            console.log(val)
            if (val) {

                setUser({
                    name: formData.get('name'),
                    password: formData.get('password'),
                    email: formData.get('email'),
                    birthdate: date

                });
                setEmail(false)
            } else {
                setEmail(true)
            }
            el.reset();
        } else {
            setState(true);
        }



        console.log(data)
    };




    useEffect(() => {
        setTimeout(() => setState(false), 2500);


        function* gen() {

            let i = 0;
            while (true) {
                i++;
                yield 1985 + i;
            }


        }
        let generate = gen()
        let p = []
        for (let index = 0; index < 75; index++) p.push(generate.next().value)


        setYearState(p);

        setMonth(["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]);



    }, [data]);










    return (
        <>
            <form

                className="form_register"
                onSubmit={HandleSubmit}>
                <div className="form_register--fields title_form">
                    <h2>Register</h2>
                </div>
                <div className="form_register--fields">
                    <label htmlFor="id_n">Username</label>
                    <input
                        type="text"

                        name="name"
                        id="id_n"
                        placeholder="" />
                </div>
                <div className="form_register--fields">
                    <label
                        htmlFor="password_r">Password</label>
                    <input

                        type="password"
                        id="password_r"
                        autoComplete="false"
                        name="password"
                        placeholder=""
                    />
                </div>
                <div className="form_register--fields">
                    <label htmlFor="email_R">Email</label>
                    {email ? "Email invalid" : null}
                    <input
                        type="email"

                        name="email"
                        id="email_r"
                        placeholder="" />
                </div>
                <div className="form_register--fields" id="date">
                    <h1 style={{ color: "#fff" }}>Date</h1>
                    <div className='label_div-group'>
                        <label
                            className='label_date'
                            htmlFor="day">Day</label>
                        <label
                            className='label_date'
                            htmlFor="month">Month</label>
                        <label
                            className='label_date'
                            htmlFor="year">Year</label>
                    </div>
                    <div className='date_div-group'>
                        <input
                            type="text"
                            id='day'
                            name='day' />
                        <input
                            list="months"

                            id='month'
                            name='month' />
                        <datalist id="months">
                            {month.length > 0 ? month.map((value, index) => (
                                <option
                                    value={value}
                                    key={index} > {value} </option>
                            )) : null}
                        </datalist>

                        <input
                            list="years"
                            id='year'

                            name='year' />
                        <datalist id="years">
                            {YearState.length > 0 ? YearState.map((index) => (
                                <option
                                    key={index}
                                    value={index} />
                            )) : null}
                        </datalist>
                    </div>

                </div>
                <div className="form_register--fields">
                    <input type="submit" value="Registrar" />
                </div>
                <div className="messages_register">
                    {msg === "User exists" ?
                        <MsgRegister error='#eb0f3aff'>{msg}</MsgRegister> :
                        null}
                    {msg === 'User register success' ?
                        <MsgRegister>{msg}</MsgRegister> :
                        null}
                    {state ?
                        <MsgRegister
                            className="span_check"
                            error='#eb0f3aff'>Campos vacios</MsgRegister> :
                        null}
                </div>
            </form>
        </>
    );
};
