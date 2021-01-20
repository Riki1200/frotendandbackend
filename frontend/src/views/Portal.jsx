import React from 'react';

import ReactDOM from 'react-dom';
import { Modal, Children } from '../stylesComponents/styles-components';

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

