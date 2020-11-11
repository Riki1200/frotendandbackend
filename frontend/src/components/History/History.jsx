import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import API from '../../api/index';
import { useUsers } from '../../hooks/useGet';
import { Msg, ButtonCheck } from '../../stylesComponents/styles-components';
import { Redirect } from 'react-router-dom';


import { useFetchData } from '../../hooks/useFetchTwo';

import { ModalView } from '../../views/ModalConfirm';


export const History = () => {

    const [ids, setId] = useState(0);
    const [check, setCheck] = useState(false);

    const [modal, setModal] = useState(false);
    const [confim, setConfirm] = useState(false);

    const [updateState, setUpdate] = useState(false);


    const [captureId, setCapture] = useState(null);
    const handleDeleted = (ev, id) => {
        ev.preventDefault();

        if (modal) {
            setCheck(true);
            setId(r => r = id);
            setConfirm(true);
        }

    }

    const [idUpdate, setIDUpdate] = useState(null);



    useEffect(() => {
        if (confim === true) {
            setInterval(() => {
                window.location.reload();
            }, 900);
        }
    })


    const [del] = useFetchData(API.delete, ids, check);

    const { data } = useUsers(API.get);
    let rows = data;



    const HandleUpdated = (ev, id) => {
        ev.preventDefault();
        console.log(id);
        setIDUpdate(id);
        setUpdate(true);
    }

    let { msg } = del;

    if (updateState) {
        return <Redirect to={'/system/update/' + idUpdate} />
    }


    return <>
        <Helmet>
            <title>Historys | React</title>
        </Helmet>
        <div className='content_history'>
            {
                modal ? <ModalView
                    massage={"¿Desea eliminar esta historia?"}

                    onClosed={(ev) => {
                        ev.stopPropagation();
                        ev.persist()

                        const validate = ev.target.classList.contains('modal_check')
                        if (validate) setModal(false)
                    }}
                >
                    <ButtonCheck onClick={(ev) => {
                        setModal(false)
                        handleDeleted(ev, captureId)
                    }}> <img src='/icons/yes.png' alt='yes' /> Si  </ButtonCheck>
                    <ButtonCheck onClick={() => {
                        setModal(false)
                    }}> <img src='/icons/closed.png' alt='closed' />  No   </ButtonCheck>
                </ModalView> : null
            }
            {rows.length > 0 ?
                <ol className='history_list'>{
                    rows.map(({ rowid, title, date, history, url }, index) => (

                        <li className='list_history' key={index}>

                            <div className='history_person'>
                                <h1 className='name_person'>{title}</h1>
                                <img width="450px" loading='lazy' src={url} alt={title} />
                                <p className='history'>{history}</p>
                                <span>{date}</span>
                            </div>


                            <div className='button_setting'>
                                <button
                                    className='update_button'
                                    data-tooltip='update'
                                    onClick={(ev) => {
                                        HandleUpdated(ev, rowid)
                                    }}
                                ></button>
                                <button
                                    className='deleted_button'
                                    onClick={() => {
                                        setCapture(rowid)
                                        setModal(true)
                                    }}
                                    data-tooltip='deleted'

                                ></button>
                            </div>
                        </li>))}
                </ol> :
                <Msg
                    type={"0"}
                    width="60ch">
                    Not match histotory
                </Msg>}
            {msg}
        </div>
    </>
}




