import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "./Home";
import { Register } from "./register/Register";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from '../routes/Private.routes';
import { UseThemeContext } from '../context/useContextTheme';

const FooterS = styled("footer")`
  width: 100%;
  color: #fff;
  height: 70px;
  text-align: center;
  font-weight: bold;
  line-height: 65px;
`;

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
                <PrivateRoute path='/system' component={Home} />

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
