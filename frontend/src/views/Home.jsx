import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Add } from '../components/AddUser/AddUser';
import { Histroy } from '../components/History/History';
import { Users } from '../components/User/User';
import { useTheme } from '../context/useContextTheme';



export const Home = () => {

    let ThemeConsumer = useTheme();


    return <>
        <Header styleContext={ThemeConsumer} />
        <main className='main_container' style={{ ...ThemeConsumer }}>
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
        <Footer styleContext={ThemeConsumer} />
    </>
}