import React, { useState, useEffect } from "react";
import API from '../../api/index';
import { useFetch } from "../../hooks/useFetch";
import { MsgRegister } from '../../stylesComponents/styles-components'




export const FormRegister = () => {
    const [state, setState] = useState(false);
    const { data, setUser } = useFetch(API.login);
    let { value } = data;

    console.log(data);
    const HandleSubmit = (evt) => {
        evt.preventDefault();
        let el = evt.target;
        if (
            evt.target.name.value !== "" &&
            evt.target.password.value !== "" &&
            evt.target.email.value !== "" &&
            evt.target.date.value !== ""
        ) {
            setUser({
                name: evt.target.name.value,
                password: evt.target.password.value,
                email: evt.target.email.value,
                date: evt.target.date.value,
            });
            el.reset();
        } else {
            setState(true);
        }
    };

    useEffect(function () {
        setTimeout(() => {
            setState(false);
        }, 2500);
    });

    return (
        <>
            <form className="form_register" onSubmit={HandleSubmit}>
                <div className="form_register--fields title_form">
                    <h2>Registro</h2>
                </div>
                <div className="form_register--fields">
                    <label htmlFor="id_n">Nombre y apellido</label>
                    <input type="text" name="name" id="id_n" placeholder="" />
                </div>
                <div className="form_register--fields">
                    <label htmlFor="password_r">Contraseña</label>
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
                    <input type="email" name="email" id="email_r" placeholder="" />
                </div>
                <div className="form_register--fields">
                    <label htmlFor="date">Fecha</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div className="form_register--fields">
                    <input type="submit" value="Registrar" />
                </div>
                <div className="messages_register">
                    {value ? <MsgRegister>Registrado</MsgRegister> : null}
                    {state ? <MsgRegister className="span_check" error='#eb0f3aff'>Campos vacios</MsgRegister> : null}
                </div>
            </form>
        </>
    );
};
