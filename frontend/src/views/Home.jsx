import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Add } from '../components/AddUser/AddUser';
import { Histroy } from '../components/History/History';
import { Users } from '../components/User/User';
import styled from 'styled-components';

const BoxTheme = styled('div')`
    position: absolute;
    right: -228px;
    background-color: var(--transparent-color);
    padding: 2rem 5ch;
    transition: right,background-color linear 200ms, linear 200ms;
    &::after{
        content: "<";
        font-size: 2.5rem;
        color: #000;
        position: absolute;
        height: 50px;
        width: 30px;
        left: 10px;
        top: 32.5px;
        z-index: 1;
    }
    &:hover {
        right:-20px;
        background-color: hsl(180, 3%, 94%, 0.8);
    }
`;
const ButtonTheme = styled('button')`
    font-weight: bold; 
    border-radius: 3px;   
    padding: 1rem 3rem;
`;

export const Home = () => {
    return <>
        <Header />
        <main className='main_container'>
            <Switch>
                <Route exact path="/system/">
                    <Users />
                </Route>
                <Route exact path='/system/history'>
                    <Histroy />
                </Route>
                <Route exact path='/system/add'>
                    <Add />
                </Route>
            </Switch>
            <BoxTheme>
                <ButtonTheme>Change Color</ButtonTheme>
            </BoxTheme>
        </main>
        <Footer />
    </>
}