import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component{
    greetingUser(){
        return (
            <div className="loggedin">
                <h3>Hello, {this.props.currentUser.firstname}</h3>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    notLoggedin(){
        return(
            <div>
                <div className="nav-bar-right">
                    <div className="signin-button"><Link to={'/login'}>Sign In</Link></div>
                    <div className="signup-button"><Link to={'/signup'}>Sign Up</Link> </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className='signin-signout'>{this.props.currentUser ? this.greetingUser() : this.notLoggedin()}</div>            
        )
    }
}

export default Greeting


