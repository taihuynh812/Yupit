import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import { login, logout, signup } from "./actions/session"
import {fetchBusinesses} from './actions/business'
import {fetchUsers} from './actions/user'
import {fetchReviews, createReview} from './actions/review'



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }
    window.store = store
    window.signup = signup
    window.login = login
    window.logout = logout
    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    window.fetchBusinesses = fetchBusinesses
    window.fetchUsers = fetchUsers
    window.fetchReviews = fetchReviews
    window.createReview = createReview

    ReactDOM.render(<Root store={store}/>, root)
})