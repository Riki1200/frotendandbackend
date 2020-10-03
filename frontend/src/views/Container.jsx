import React, { useEffect, useState } from "react";

import { Home } from "./Home";
import { Register } from "./register/Register";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from '../routes/Private.routes';
import { UseThemeContext } from '../context/useContextTheme';
import { FooterS } from '../stylesComponents/styles-components';


const Footer = function () {
    let [date, setDate] = useState(null);
    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [date]);
    return (
        <FooterS className="footer_form--content">
            Login CRUD &copy; {date}
        </FooterS>
    );
};

const LoginView = function () {
    return <>
        <UseThemeContext>
            <Switch>
                <PrivateRoute path='/system' component={Home} auth={
                    window.localStorage.key(0) !== null ? true : false
                } />
                <Route path='/' render={() => (
                    <div className="register_content">
                        <Register />
                        <Footer />
                    </div>
                )}>
                </Route>

            </Switch>
        </UseThemeContext>
    </>

};

export function Container() {
    return <>
        <div className="container">
            <div className='sub_container'>
                <LoginView />
            </div>
        </div>
    </>
}
