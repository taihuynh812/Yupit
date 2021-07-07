import React from 'react';
import { Route, Switch } from 'react-router';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../util/route_util';
import Homepage from './homepage/home_page';
import BusinessShowContainer from './business/business_show/business_show_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/businesses/:businessId' component={BusinessShowContainer}/>
            <AuthRoute className='nav-bar-right' path="/login" component={LoginFormContainer} />
            <AuthRoute className='nav-bar-right' path="/signup" component={SignupFormContainer} /> 
        </Switch>     
    </div>
)

export default App