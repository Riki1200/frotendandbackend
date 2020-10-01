import React, { useState } from 'react';
import API from '../../api/index';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { ModalAll } from '../../components/Portal';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';
import { FakeToken } from '../../helpers/tokenHelper';
import { LogoutIcon } from './Logout';
const Spinner = styled('img')`
    animation: Rotate linear forwards 2s infinite;
    width: 300px;
    @keyframes  Rotate{
        to {
            transfrom: rotate(0deg)
        };
        from {
            transform: rotate(360deg);
        };
    };
`;

const Msg = styled('p')`
    margin-top: 15px;
    width: ${props => props.width || '200px'};
    padding: 10px 15px;
    color:#Fff;
    background-color: ${props => props.type === '0' ? '#eb0f3aff' : '#48CF76'} ;
    text-align:center;
    animation: FadeIn forwards linear 250ms;
    font-size: 1rem;
    font-weight: 600;
    @keyframes  FadeIn{
        to {
            
                opacity: 1;
        };
        from {
                opacity: 0.2;
        };
    }
`;

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
            if (value) setStorage(value);
            setLogin(false);
            setUser({ email: email, password: password });
        } else {
            setLogin(true);
            setStorage(false);
            setHidden(false);
            setTimeout(() => setLogin(false), 2200);
        }

    }


    console.log(data)




    if (window.localStorage.getItem('akt-login') !== null) {
        return <Redirect to='/system' />
    } else
        return <>
            <Redirect to='/' />
            {hidden ?
                <ModalAll children={<Spinner alt='Spinner' src='/images/tail-spin.svg' />} />
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
                {data.value === true ? <Msg type={'1'}>Usuario comprobado, puede volver darle click</Msg> : null}
            </form>

        </>
} 
