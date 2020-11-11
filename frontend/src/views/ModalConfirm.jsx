import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const DivContainer = styled('div')`
    position: fixed;
    background-color: var(--bgScale);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width:100vmax;
    height:100%;
    z-index:2;
    animation: ModalThree linear 200ms forwards;
    top:0;
    @keyframes ModalThree {
        to {
            opacity: 1;
        }
        from {
            opacity: 0.5;
        }
    }
`;

const DivChild = styled('div')`
    flex: 1 1 100%;
    width: 300px;
    background-color:hsl(0, 0%, 100%);
    position:absolute;
    height: 200px;
    border-radius: 6.9px;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    align-items:center;
    padding:20px;
     z-index:99;
    p {
        text-align: center;
        color: gray;
        font-size: 1.2rem;
        font-weight: 100;
    }
`;



export const ModalView = ({ children, massage, onClosed }) => {


    return <>
        <DivContainer className='modal_check' onClick={onClosed}>
            <DivChild>
                <p> {massage} </p>
                <div style={{ display: "flex", gap: "20px" }}>
                    {children}
                </div>
            </DivChild>
        </DivContainer>
    </>
}


ModalView.propTypes = {
    children: PropTypes.node.isRequired,
    massage: PropTypes.string.isRequired,
    props: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.bool,
        PropTypes.number,
        PropTypes.object
    ]),
    onClosed: PropTypes.func
}


