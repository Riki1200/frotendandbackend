import React, { useState, useEffect, useRef } from 'react';
import { FormLogin } from './LoginForm';
import { FormRegister } from './RegisterForm';
import { Helmet } from 'react-helmet-async';

export const Register = () => {
    const [state, setState] = useState(true);
    let [number, setNumber] = useState(20);
    const HandleChange = () => {
        setState(v => !v);
    }
    const hueRotateRef = useRef()

    useEffect(() => {
        return () => {
            if (state === false) {
                setState(v => v);
            }

        }
    }, [state, number]);
    const Over = (mouse) => {
        mouse.persist()

        setNumber(number += 10)
        if (number > 360) {
            setNumber(0)
        }

        //hueRotateRef.current.style.transition = 'filter linear 300ms';
    }
    return <>
        <Helmet title='Login | Registrer' />
        <main
            className='main_login'
            ref={hueRotateRef}
            style={
                {
                    filter: `hue-rotate(${number}deg)`,
                    transition: "filter linear 1200ms"
                }}
            onMouseMove={Over}>
            {
                state ? <FormLogin /> : <FormRegister />
            }
            <div className='button_next'>
                <button className='button_login' name='login' onClick={HandleChange}>
                    {state ? <span> Sign up</span> :
                        <span> Sign In </span>}
                </button>
            </div>
        </main>
    </>
}