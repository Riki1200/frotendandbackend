import React, { useState, useEffect } from "react";

import API from '../../api/index';
import { useFetch } from "../../hooks/useFetch";
import { MsgRegister } from '../../stylesComponents/styles-components'




export const FormRegister = () => {
    const [state, setState] = useState(false);
    const { data, setUser } = useFetch(API.register, 'register');


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('')
    const [mon, setMon] = useState('')
    const [year, setYear] = useState('');

    const [month, setMonth] = useState([])

    const [YearState, setYearState] = useState([])

    let { msg, value } = data;


    const HandleSubmit = (evt) => {
        evt.preventDefault();
        let el = evt.target;
        if (name !== ""
            && password !== ""
            && email !== ""
            && day !== ""
            && month !== ""
            && year !== "") {

            const validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g

            let date = `${day}/${mon}/${year}`;

            let val = validateEmail.test(email)
            console.log(val)
            setUser({
                name: name,
                password: password,
                email: email,
                birthdate: date

            });
            el.reset();
        } else {
            setState(true);
        }
    };




    useEffect(function () {
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
        for (let index = 0; index < 75; index++) {

            p.push(generate.next().value)

        }

        setYearState(p);

        setMonth(["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]);



    }, []);









    return (
        <>
            <form className="form_register" onSubmit={HandleSubmit}>
                <div className="form_register--fields title_form">
                    <h2>Register</h2>
                </div>
                <div className="form_register--fields">
                    <label htmlFor="id_n">Username</label>
                    <input
                        type="text"
                        onChange={(v) => setName(v.value)}
                        name="name"
                        id="id_n"
                        placeholder="" />
                </div>
                <div className="form_register--fields">
                    <label
                        htmlFor="password_r">Password</label>
                    <input
                        onChange={(v) => setPassword(v.value)}
                        type="password"
                        id="password_r"
                        autoComplete="false"
                        name="password"
                        placeholder=""
                    />
                </div>
                <div className="form_register--fields">
                    <label htmlFor="email_R">Email</label>
                    <input
                        type="email"
                        onChange={(v) => setEmail(v.value)}
                        name="email"
                        id="email_r"
                        placeholder="" />
                </div>
                <div className="form_register--fields" id="date">
                    <h1 style={{ color: "#fff" }}>Date</h1>
                    <div className='label_div-group'>
                        <label className='label_date' htmlFor="day">Day</label>
                        <label className='label_date' htmlFor="month">Month</label>
                        <label className='label_date' htmlFor="year">Year</label>
                    </div>
                    <div className='date_div-group'>
                        <input type="text" onChange={(v) => setDay(v.value)} id='day' name='day' />
                        <input
                            list="months"
                            onChange={(v) => setMon(v.value)}
                            id='month'
                            name='month' />
                        <datalist id="months">
                            {month.length > 0 ? month.map((value, index) => (
                                <option value={value} key={index} > {value} </option>
                            )) : null}
                        </datalist>

                        <input list="years" id='year' onChange={(v) => setYear(v.value)} name='year' />
                        <datalist id="years">
                            {YearState.length > 0 ? YearState.map((index) => (
                                <option key={index} value={index} />
                            )) : null}
                        </datalist>
                    </div>

                </div>
                <div className="form_register--fields">
                    <input type="submit" value="Registrar" />
                </div>
                <div className="messages_register">
                    {msg === "Users exists" ?
                        <MsgRegister error='#eb0f3aff'>{msg}</MsgRegister> :
                        null}
                    {value === true ?
                        <MsgRegister>Registrado</MsgRegister> :
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
