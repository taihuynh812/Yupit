import React from "react"
import GreetingContainer from '../greeting/greeting_container';
import BusinessIndexContainer from "../business/business_index_container";

const Homepage = () => (
    <div>
        <div className='top-half-page'>
            <header className="header-container">
                <div className="nav-bar">
                    <div className='nav-bar-right'><GreetingContainer /></div>
                </div>
            </header>
            <div className="yupit-logo"><img src="https://lh3.googleusercontent.com/pw/AM-JKLVGlt2Z46Kdqcrwfyey_PGG8Lrr1Amu9TB4yKE5_1C71ypwoy96PzwUb_6zmFc7CPpUvSYSOzS8f87dAzaqmV-NnA0XzR3NOf8f_c-LI6FGZ55cUNoTFK6ApvMmlNM4koEyK2MTIrZDIz6fbv4piEc=w522-h478-no?authuser=0" alt="Yupit-logo" /></div>  
        </div> 
        <div className='botton-half-page'><BusinessIndexContainer /></div>
    </div>
    
)

export default Homepage