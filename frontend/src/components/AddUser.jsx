import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
export const Add = function () {


    const [loading, setLoading] = useState(false);

    let dateFormat = new Date()
        .toLocaleDateString()
        .split("/")
        .reverse()
        .toString()
        .replace(',', '-')
        .replace(',', '-')
    let formatear = new Intl.DateTimeFormat('en-US')


    const handlePrevent = function (ev) {
        let formData = new FormData(ev.target);
        ev.preventDefault();

        setLoading(!loading)
        ev.target.reset();
        console.log(loading)
    }

    const HandleChange = function (evt) {
        let exp = /(\w[\Da-z\DA-z]\s\w+\D)/g;
        let { name, value } = evt.target
        let data = {};

        switch (name) {
            case 'name':
                if (exp.test(value)) {
                    data.name = value;
                    setLoading(n => !n);
                }
                break;
            case 'phone':
                data.phone = value;
                break;
            case 'history':
                data.history = value;
                break;
            default:
                evt.target.reset();
                break;
        }

        console.info(data)
    }


    return <>
        <Helmet>
            <title>Añadir historia | Add R</title>
            <meta name='author' content='RomeoDev' />
            <meta name='description' content='Añadir usuarios para llenar las historia y verificar si la historia es hermosa o  una mierda' />
            <meta name='keywords' content='ReactJS, SQLite, NodeJS, CRUD, Google Chrome' />
        </Helmet>
        <section className='section_add--content'>
            <form onSubmit={handlePrevent}>
                <div className='form_fields'>
                    <label>
                        Nombre y apellido:
                    <input name='name' type='text' onChange={HandleChange} placeholder='...?' />
                    </label>
                </div>
                <div className='form_fields'>
                    <label>
                        Numero telefonico
                    <input type='tel' name='phone' onChange={HandleChange} />
                    </label>
                </div>
                <div className='form_fields'>
                    <textarea name='history' placeholder='History...' onChange={HandleChange} autoComplete='false'></textarea>
                </div>
                <div className='form_fields'>
                    <input type='submit' value='Add' />
                </div>
            </form>
        </section>

    </>
}