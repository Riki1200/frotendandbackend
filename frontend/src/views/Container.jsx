import React, { useEffect, useState } from "react";

import { Home } from "./Home";
import { Register } from "./register/Register";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from '../routes/Private.routes';

import { FooterS } from '../stylesComponents/styles-components';




const View = function () {
    let [date, setDate] = useState(null);
    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [date]);

    return <>

        <Switch>
            <PrivateRoute path='/system' component={Home} auth={
                window.localStorage.key(0) !== null ? true : false
            } />
            <Route path='/'>
                <div className="register_content">
                    <Register />
                    <FooterS className="footer_form--content">
                        Login CRUD &copy; {date}
                    </FooterS>
                </div>
            </Route>

        </Switch>

    </>

};

export function Container() {
    return <>
        <div className="container">
            <div className='sub_container'>
                <View />
            </div>
        </div>
    </>
}
