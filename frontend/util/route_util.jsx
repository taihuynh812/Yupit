import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react'

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props}/> : <Redirect to="/" />
        }
    />
)

const ReviewAuth = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Component {...props}/> : <Redirect to="/login" />
        }
    />
)

const mSTP = state => {
    return { loggedIn: !!state.session.id }
}

export const AuthRoute = withRouter(
    connect(mSTP, null)(Auth)
)

export const ReviewAuthRoute = withRouter(
    connect(mSTP, null)(ReviewAuth)
)