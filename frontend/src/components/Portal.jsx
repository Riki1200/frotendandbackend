import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = styled('div')`
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #465FB4;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
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
        position:absolute;
        margin-left:auto;
        margin-right: auto;
        text-align:center;
        left: 120px;
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
ModalAll.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element
}