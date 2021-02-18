import React, { useState, useEffect } from 'react';
import API from '../../api/index';
import { useFetch } from '../../hooks/useFetch';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';

import { LoadingSpinner, Msg, LogoutIcon } from '../../stylesComponents/styles-components';



export const FormLogin = () => {
    const { data, setUser, loading } = useFetch(API.login, 'login');


    const [login, setLogin] = useState(false);

    const [setUserStorage, setValid] = useLocalStorage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // const { msg } = data;
    const LoginForm = (ev) => {
        ev.preventDefault();


        if (email && password) {

            setLogin(false);
            setUser({
                email,
                password
            });
            console.log(data)
            setPassword('');
            setEmail('');
        } else {
            setLogin(true);

            //setHidden(false);
            setTimeout(() => setLogin(false), 2200);
        }


    }

    useEffect(() => {

        if (Object.keys(data).length > 0 && data.msg === undefined) {
            window.location.reload();
            setValid(true)
            setUserStorage(data);

        }

    });







    if (window.localStorage.getItem('akt-login') !== null) {
        return <Redirect to='/system' />
    }
    return <>
        <Redirect to='/' />
        <form className='form_login' method="POST" onSubmit={LoginForm}>
            <div className='title_form form_login-fields'>
                <h2>Iniciar session</h2>
            </div>
            <div className='form_login-fields'>
                <input type='email' name='email' onChange={t => setEmail(t.target.value)} value={email} id='email' placeholder='' />
                <label htmlFor='email'>Email</label>
                {login === true ? <Msg type='0'>Campos vacios</Msg> : null}
            </div>
            <div className='form_login-fields'>
                <input type='password' name='password' onChange={t => setPassword(t.target.value)} value={password} id='password' autoComplete="off" placeholder='' />
                <label htmlFor='password'>Password</label>
                {login === true ? <Msg type='0'>Campos vacios</Msg> : null}
            </div>
            <div className='form_login-fields'>
                <button type='submit'>
                    Sign In<LogoutIcon src='/icons/logout.svg' alt='icon' />
                </button>
            </div>
            {data?.msg === 'The password is incorrect! Please, insert correct password' ?
                <Msg type={'0'}>
                    Datos incorrectos
                    </Msg>
                :
                null
            }
            {
                data?.value === true ? <Msg type={'0'}>
                    No existe el usuario
                    </Msg> : null
            }
            {loading ?
                <LoadingSpinner src='/images/loading.svg' alt='loading' />
                :
                null}
        </form>

    </>
}
