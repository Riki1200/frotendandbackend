import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.localStorage.getItem('akt-login') ?
            (<Component {...props} />)
            : (
                <Redirect to={
                    {
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }
                }></Redirect>
            )
    )} />
);
PrivateRoute.propTypes = {
    auth: PropTypes.bool
}
