import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardContent, CardHistory } from '../../stylesComponents/styles-components';
import { HistoryUser } from '../../api/index';



export const Users = function () {




    return <>
        <Helmet>
            <title>Home | Users</title>
            <meta name='description' content='Inicio de la pagina, donde se veran su inicios' />
        </Helmet>
        <article className='content--user'>
            <div className='title_content'>
                <h1 className='title'>History Of The They People Influyent In The World</h1>
            </div>

            <section className='bg--content'>
                <CardContent className='history_person'>
                    {HistoryUser.map(({ name, history, timeAlive, title, image }, index) => (
                        <CardHistory key={index}
                            className='li_item--history'
                            color="#000">
                            <div className='card_content'>
                                <h2 className='name_person'>{name}</h2>
                                <img src={image} alt={image} />
                                <div className='history_person'>{
                                    <p>{history}</p>}
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