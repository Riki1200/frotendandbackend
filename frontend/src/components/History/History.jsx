import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import API from '../../api/index';
import { useUsers } from '../../hooks/useGet';
import { Msg, ButtonCheck } from '../../stylesComponents/styles-components';
import { Redirect } from 'react-router-dom';


import { useFetchData } from '../../hooks/useFetchTwo';

import { ModalView } from '../../views/ModalConfirm';


export const History = () => {




    const refElement = useRef()



    useEffect(() => {
        console.log(refElement)
    }, [])


    const [ids, setId] = useState(0);
    const [check, setCheck] = useState(false);
    //For Open Modal
    const [modal, setModal] = useState(false);


    /**
     * Update history
     */
    const [updateState, setUpdate] = useState(false);


    const [captureId, setCapture] = useState(null);


    const [historys, setHistory] = useState([]);




    const [idUpdate, setIDUpdate] = useState(null);




    const [del] = useFetchData(API.delete, ids, check);





    const { data } = useUsers(API.get);






    useEffect(() => {


        setHistory(data);



    }, [data])




    const HandleUpdated = (ev, id) => {
        ev.preventDefault();
        console.log(id);
        setIDUpdate(id);
        setUpdate(true);
    }

    const handleDeleted = (ev, id) => {
        ev.preventDefault();


        console.log(id)
        let filterHistories = historys.filter((e) => e._id !== id);
        console.log(filterHistories)

        setHistory(filterHistories)


        if (modal) {
            setCheck(true);
            setId(r => r = id);

        }
        console.log(historys)
    }






    let { msg } = del;

    if (updateState) return <Redirect to={`/system/update/${idUpdate}`} />

    return <>
        <Helmet>
            <title>Historys | React</title>
        </Helmet>
        <div className='content_history'>
            {
                modal ? <ModalView
                    massage={"Will do you deleted this history?"}

                    onClosed={(ev) => {
                        ev.stopPropagation();
                        ev.persist()

                        const validate = ev.target.classList.contains('modal_check')
                        if (validate) setModal(false)
                    }}
                >
                    <ButtonCheck
                        bg="#ff3a3a"
                        color='#fff'
                        fc="#fff"
                        onClick={(ev) => {
                            setModal(false)
                            handleDeleted(ev, captureId)
                        }}>
                        Si
                    </ButtonCheck>
                    <ButtonCheck
                        bg="#44bb3b"
                        color='#fff'
                        fc="#fff"
                        onClick={() => {
                            setModal(false)
                        }}>
                        No
                    </ButtonCheck>
                </ModalView> : null
            }
            {historys.length > 0 ?
                <ol className='history_list'>{
                    historys.map(({ _id, name, history, photoURI }) => (

                        <li className='list_history' ref={refElement} key={_id}>

                            <div className='history_person'>
                                <h1 className='name_person'>{name}</h1>
                                <img width="450px" loading='lazy' src={photoURI} alt={name} />
                                <p className='history'>{history}</p>

                            </div>


                            <div className='button_setting'>
                                <button
                                    className='update_button'
                                    data-tooltip='update'
                                    onClick={(ev) => {
                                        HandleUpdated(ev, _id)
                                    }}
                                ></button>
                                <button
                                    className='deleted_button'
                                    onClick={() => {
                                        setCapture(_id)
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




