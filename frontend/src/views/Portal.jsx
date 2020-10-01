import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';


const Modal = styled('div')`
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #2D40FF;
    background-image: linear-gradient(#01031b,#4d72de);
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    & ~ .remove {
        display:none;
    }
`;
const Children = styled('div')`
    position:relative;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;            
    align-items:center; 
    top: 0;
    h2{
        
        margin-left:auto;
        margin-right: auto;
        text-align:center;
     
        font-size: 2rem;
        color:#fff;
        font-weight: 100;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`
export const ModalAll = ({ children }) => {


    return ReactDOM.createPortal(
        <Modal className={`modal_content`} >
            <Children>
                {children}
            </Children>
        </Modal>,
        document.getElementById('modal-portal')
    )

}
