import React from 'react'
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';
import NavbarGreetingContainer from './navbar_greeting_container'

class NavBar extends React.Component{
    
    render(){
        return(
            <div className='nav-bar-wrapper'>
                <Link className='nav-bar-logo' to='/'><img className="nav-bar-yupit-logo" src="https://lh3.googleusercontent.com/pw/AM-JKLVGlt2Z46Kdqcrwfyey_PGG8Lrr1Amu9TB4yKE5_1C71ypwoy96PzwUb_6zmFc7CPpUvSYSOzS8f87dAzaqmV-NnA0XzR3NOf8f_c-LI6FGZ55cUNoTFK6ApvMmlNM4koEyK2MTIrZDIz6fbv4piEc=w522-h478-no?authuser=0" /></Link>
                <div className='nav-bar-search'><SearchBarContainer/></div>
                <div className='nav-bar-session'><NavbarGreetingContainer/></div>
            </div>
        )
    }
}

export default NavBar