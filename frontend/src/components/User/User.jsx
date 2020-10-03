import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BGImage } from '../../stylesComponents/styles-components';


export const Users = function () {
    return <>
        <Helmet>
            <title>Home | Users</title>
            <meta name='description' content='Inicio de la pagina, donde se veran su inicios' />
        </Helmet>
        <div className='content--user'>
            <section className='bg--content'>
                <BGImage src='/images/Frame.svg' alt='ilustration' />
            </section>
        </div>
    </>
}