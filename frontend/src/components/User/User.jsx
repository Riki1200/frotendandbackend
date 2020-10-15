import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CardContent, CardHistory } from '../../stylesComponents/styles-components';
import { HistoryUser } from '../../api/index';
import { useTheme } from '../../context/useContextTheme';





export const Users = function () {

    const themeConsumer = useTheme()



    const HandleText = (target) => {
        const Len = (len) => len.length;


        target.persist();
        target.preventDefault();
        console.log(target.target.innerText)
        target.target.innerText = target.target.innerText.slice(50, Len(target.target.innerText));
        //Len(target.target.innerText)

    }

    return <>
        <Helmet>
            <title>Home | Users</title>
            <meta name='description' content='Inicio de la pagina, donde se veran su inicios' />
        </Helmet>
        <article className='content--user'>
            <div className='title_content'>
                <h1 className='title'>History the person influyent in world</h1>
            </div>

            <section className='bg--content'>
                <CardContent
                    className='history_person'
                    bg={themeConsumer.backgroundColor}
                    color={themeConsumer.color}
                >
                    {HistoryUser.map(({ name, history, timeAlive, title, image }, index) => (
                        <CardHistory
                            key={index}
                            className='li_item--history'
                            color={themeConsumer.color}
                        >
                            <div className='card_content'>
                                <h2 className='name_person'>{name}</h2>
                                <img src={image} alt={image} />
                                <div className='history_person'>{
                                    <p onClick={(el) => HandleText(el)}>{history}</p>}
                                </div>
                                <div className='content_alive'>
                                    <span className='title_name'>{title}</span>
                                    <em className='history_tiem'>{timeAlive}</em>
                                </div>
                            </div>
                        </CardHistory>
                    ))}
                </CardContent>
            </section>
        </article>
    </>
}