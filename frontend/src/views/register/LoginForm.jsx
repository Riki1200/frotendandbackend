import React, { useState, useEffect } from 'react';
import API from '../../api/index';
import { useFetch } from '../../hooks/useFetch';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';
import { FakeToken } from '../../helpers/tokenHelper';
import { LoadingSpinner, Msg, LogoutIcon } from '../../stylesComponents/styles-components';



export const FormLogin = () => {
    const { data, setUser } = useFetch(API.login, 'login');


    const [login, setLogin] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [setStorage] = useLocalStorage(FakeToken(10));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);


    // const { msg } = data;
    const LoginForm = (ev) => {
        ev.preventDefault();


        if (email && password) {
            setHidden(true);

            //  if (value) ;
            setLogin(false);


            if (data.user.username !== "" && data.user.email !== "") {
                setTimeout(() => setHidden(false), 1000)
                setUser({
                    email,
                    password
                });
            }





            setPassword('');
            setEmail('');

            //  if (data.value) {
            //   setValid(true);
            //   }




        } else {
            setLogin(true);
            setStorage(false);
            //setHidden(false);
            setTimeout(() => setLogin(false), 2200);
        }

        console.log(data)

    }




    useEffect(() => {

        //ssetStorage(data.value);
    }, [setStorage, valid, data, hidden, setHidden]);

    if (window.localStorage.getItem('akt-login') !== null) {
        return <Redirect to='/system' />
    } else
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
                {data?.msg === "passowrd is wrong" ?
                    <Msg type={'0'}>
                        Datos incorrectos
                    </Msg>
                    :
                    null
                }
                {hidden ?
                    <LoadingSpinner src='/images/loading.svg' alt='loading' />
                    :
                    null}
            </form>

        </>
}
