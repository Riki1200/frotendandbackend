import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Add } from '../components/AddUser/AddUser';
import { Histroy } from '../components/History/History';
import { Users } from '../components/User/User';
import { useTheme, useThemeUpdate } from '../context/useContextTheme';
import { BoxTheme, ButtonTheme } from '../stylesComponents/styles-components';


export const Home = () => {
    let updateTheme = useThemeUpdate();
    let ThemeConsumer = useTheme();
    const HandleTheme = () => {
        updateTheme(r => !r);
    }

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
            <BoxTheme bg={ThemeConsumer.backgroundColor}>
                <ButtonTheme onClick={HandleTheme}>Change Color</ButtonTheme>
            </BoxTheme>
        </main>
        <Footer styleContext={ThemeConsumer} />
    </>
}