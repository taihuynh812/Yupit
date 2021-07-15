import React from 'react';
import { Route, Switch } from 'react-router';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute, ReviewAuthRoute } from '../util/route_util';
import Homepage from './homepage/home_page';
import BusinessShowContainer from './business/business_show/business_show_container';
import ReviewSubmitContainer from './review/review_new/review_submit_container';
import ReviewUpdateContainer from './review/review_update/review_update_container';
import SearchResultContainer from './search/search_result_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/businesses/:businessId' component={BusinessShowContainer}/>
            <Route path = '/search/:keyword' component={SearchResultContainer}/>
            <Route exact path ='/search/' component={SearchResultContainer}/>
            <ReviewAuthRoute exact path='/businesses/:businessId/reviews/new' component={ReviewSubmitContainer} />
            <ReviewAuthRoute exact path='/businesses/:businessId/reviews/:reviewId/update' component={ReviewUpdateContainer} />
            <AuthRoute className='nav-bar-right' path="/login" component={LoginFormContainer} />
            <AuthRoute className='nav-bar-right' path="/signup" component={SignupFormContainer} /> 
        </Switch>     
    </div>
)


export default App