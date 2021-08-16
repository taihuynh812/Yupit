import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'

class Greeting extends React.Component{
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
            <div className="nav-bar-right" >
                <div className='navbar-greeting-user-container' onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faUserAlt}/>
                    <div className={open ? "drop-down-open" : "drop-down-close"} >
                        <div className='drop-down-container'>
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


