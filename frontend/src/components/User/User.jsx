import React from 'react';
import { Helmet } from 'react-helmet-async';





export const Users = function () {
    return <>
        <Helmet>
            <title>Home | Users</title>
            <meta name='description' content='Inicio de la pagina, donde se veran su inicios' />
        </Helmet>
        <h1>Welcome</h1>
    </>
}