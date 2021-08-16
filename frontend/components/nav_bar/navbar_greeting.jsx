import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'

class NavbarGreeting extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            open: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        const open = this.state.open
        this.setState({open: !open})
    }

    greetingUser(){
        const {open} = this.state
        return (
            <div className="navbar-loggedin" >
                <div className='navbar-greeting-user-container' onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faUserAlt}/>
                    <div className={open ? "drop-down-open" : "drop-down-close"} >
                        <div className='drop-down-container'>
                            {/* <div className="user-dropdown-about-me">
                                <div><FontAwesomeIcon icon={RegFontAwesome.faUserCircle} /></div>
                                <div>About me</div> 
                            </div> */}
                            
                            <div className="user-dropdown-log-out" onClick={this.props.logout}>
                                <div><FontAwesomeIcon icon={faSignOutAlt} /></div>
                                <div>Log Out</div> 
                            </div> 
                        </div>
                    </div>
                </div>
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


