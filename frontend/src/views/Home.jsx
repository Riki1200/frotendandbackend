import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Add } from '../components/AddUser';
import { Histroy } from '../components/History';
import { Users } from '../components/User';



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
        </main>
        <Footer />
    </>
}