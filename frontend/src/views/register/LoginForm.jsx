import React, { useState, useEffect } from 'react';
import API from '../../api/index';
import { useFetch } from '../../hooks/useFetch';
import { ModalAll } from './../Portal';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';
import { FakeToken } from '../../helpers/tokenHelper';
import { Spinner, Msg, LogoutIcon } from '../../stylesComponents/styles-components';



export const FormLogin = () => {
    const { data, setUser } = useFetch(API.login);


    const [login, setLogin] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [setStorage] = useLocalStorage(FakeToken(10));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { value } = data;

    const LoginForm = (ev) => {
        ev.preventDefault();
        if (email && password) {
            setHidden(true);
            setTimeout(() => { setHidden(false); }, 1500)
            // if (value) setStorage(value);
            setLogin(false);
            setUser({ email: email, password: password });
            setPassword('');
            setEmail('');
        } else {
            setLogin(true);
            setStorage(false);
            setHidden(false);
            setTimeout(() => setLogin(false), 2200);
        }

    }
    useEffect(() => {
        setInterval(() => {
            if (value === true) {
                setStorage(value);
                window.location.reload();
            }
        }, 2500);

    });
    console.log(data)
    if (window.localStorage.getItem('akt-login') !== null) {
        return <Redirect to='/system' />
    } else
        return <>
            <Redirect to='/' />
            {hidden ?
                <ModalAll     >
                    <Spinner alt='Spinner' src='/images/tail-spin.svg' />
                    <h2>Loading...</h2>
                </ModalAll>
                :
                null}
            <form className='form_login' method="POST">
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
                    <button type='submit' onClick={(ev) => LoginForm(ev)}> Sign In<LogoutIcon src='/icons/logout.svg' alt='icon' /></button>
                </div>
                {data.value === false ? <Msg type={'0'}>Datos incorrectos</Msg> : null}
                {data.value === true ? <Msg width="300" type={'1'}>Usuario valido, espero un momento para iniciar session</Msg> : null}
            </form>

        </>
} 
