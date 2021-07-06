import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
        this.props.receiveErrors([])
    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.goBack())
    }

    update(field){ 
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    showErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }


    signup(){
        return(
            <div className='session-form'>
                <h1 className='session-form-action'>Sign Up for Yupit</h1>
                <div className='terms-and-service'>By logging in, you agree to Yupit’s Terms of Service and Privacy Policy.</div>
                <br/>
                {this.showErrors()}
                <br/>
                <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="session-form-field"
                            value={this.state.username}
                            onChange={this.update('username')}  
                            placeholder="Username"
                        />
                        <input 
                            type="password" 
                            className="session-form-field"
                            value={this.state.password}
                            onChange={this.update('password')} 
                            placeholder="Password" 
                        />
                        <input 
                            type="text" 
                            className="session-form-field"
                            value={this.state.firstname}
                            onChange={this.update('firstname')}  
                            placeholder="First Name"
                        />
                        <input 
                            type="text" 
                            className="session-form-field"
                            value={this.state.lastname}
                            onChange={this.update('lastname')}  
                            placeholder="Last Name"
                        />
                        <input 
                            type="text"
                            className="session-form-field" 
                            value={this.state.email}
                            onChange={this.update('email')}  
                            placeholder="Email"
                        />
                        <input 
                            type="text" pattern="[0-9]{5}" required 
                            className="session-form-field"
                            value={this.state.zipcode}
                            onChange={this.update('zipcode')}  
                            placeholder="Zipcode"
                        />
                    <button type="submit" className="session-form-button">Sign Up!</button>
                </form>
                <br/>
                Already a member? <Link to='/login'>Sign in</Link>
            </div>            
        )
    }

    login(){
        return(
            <div className='session-form'>
                <h1 className='session-form-action'>Sign In to Yupit</h1>
                <div className='terms-and-service'>By logging in, you agree to Yupit’s Terms of Service and Privacy Policy.</div>
                <br/>
                {this.showErrors()}
                <br/>
                <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="session-form-field"
                            value={this.state.username}
                            onChange={this.update('username')}  
                            placeholder="Username"
                        />
                        <input 
                            type="password" 
                            className="session-form-field"
                            value={this.state.password}
                            onChange={this.update('password')}  
                            placeholder="Password"
                        />
                    <button type="submit" className="session-form-button">Sign in</button>
                </form>
                <br/>
                New to Yupit? <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }

    render(){
        return(
            <div>
                <header className='session-form-header'>
                    <Link className='header-title' to='/'>Yupit</Link>
                </header>
                <div className='session-form-container'>
                    {this.props.formType === 'signup' ? this.signup() : this.login()}
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                </div>
            </div>
        )
    }
}

export default SessionForm