import React from 'react';
import { Switch, Route } from 'react-router-dom';


import { Header } from './Header';
import { Footer } from './Footer';
import { Add } from '../components/AddUser/AddUser';
import { History } from '../components/History/History';
import { Users } from '../components/User/User';
import { Edit } from '../components/Edit/EditHistory';



export const Home = () => <>
    <Header />
    <main className='main_container'>
        <Switch>
            <Route exact path="/system" component={Users} />
            <Route exact path='/system/history' component={History} />
            <Route exact path='/system/add' component={Add} />
            <Route exact path='/system/update/:id' component={Edit} />
        </Switch>
    </main>
    <Footer />
</>;