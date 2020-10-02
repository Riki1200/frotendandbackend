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
    left: -150px;
`;
const ButtonTheme = styled('button')``;

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