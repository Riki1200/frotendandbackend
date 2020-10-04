import React, { useState } from 'react';
import { FormLogin } from './LoginForm';
import { FormRegister } from './RegisterForm';
import { Helmet } from 'react-helmet-async';

export const Register = () => {
    const [state, setState] = useState(true);
    const HandleChange = () => {
        setState(!state);
    }
    return <>
        <Helmet title='Iniciar session | Registrase' />
        <main className='main_login'>
            {state ? <FormLogin /> : <FormRegister />}
            <div className='button_next'>
                <button className='button_login' name='login' onClick={HandleChange}>
                    {state ? <span> Sign up</span> :
                        <span> Sign In </span>}
                </button>
            </div>
        </main>
    </>
}