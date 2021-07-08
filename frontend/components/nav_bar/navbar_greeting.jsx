import React from 'react'
import { Link } from 'react-router-dom'

class NavbarGreeting extends React.Component{
    greetingUser(){
        return (
            <div className="navbar-loggedin">
                <h3 className='navbar-greeting-user'>Hello, {this.props.currentUser.firstname}</h3>
                <button className="navbar-logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    notLoggedin(){
        return(
            <div>
                <div className="navbar-notloggedin">
                    <div className="navbar-signin-button"><Link to={'/login'}>Sign In</Link></div>
                    <div className="navbar-signup-button"><Link to={'/signup'}>Sign Up</Link> </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className='navbar-signin-signout'>{this.props.currentUser ? this.greetingUser() : this.notLoggedin()}</div>            
        )
    }
}

export default NavbarGreeting


