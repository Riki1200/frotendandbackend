import React, { useState, useEffect } from 'react';
import { FormLogin } from './LoginForm';
import { FormRegister } from './RegisterForm';
import { Helmet } from 'react-helmet-async';

export const Register = () => {
    const [state, setState] = useState(true);

    const HandleChange = () => {
        setState(v => !v);
    }


    useEffect(() => {
        return () => {
            if (state === false) setState(v => v);
        }
    }, [state]);

    return <>
        <Helmet title='Login | Registrer' />
        <main className='main_login'>
            {state ? <FormLogin /> : <FormRegister />}
            <div className='button_next'>
                <button className='button_login' name='login' onClick={HandleChange}>
                    {state ? <span> Sign up</span> : <span> Sign In </span>}
                </button>
            </div>
        </main>
    </>
}