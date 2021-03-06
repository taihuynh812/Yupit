import React from "react"
import GreetingContainer from '../greeting/greeting_container';
import BusinessIndexContainer from "../business/business_index_container";
import SearchBarContainer from "../search/search_bar_container";
import AboutMeFooter from "../footer/about_me_footer";

const Homepage = () => (
    <div>
        <div className='top-half-page'>
            <div className="header-container">
                <div className='nav-bar-right'><GreetingContainer /></div>
            </div>
            <div className='middle-of-photo-header'>
                <div className="yupit-logo"><img src={window.yupitIcon} alt="Yupit-logo" /></div> 
                <div className='homepage-searchbar'><SearchBarContainer/></div>
            </div>
        </div> 
        <div className='botton-half-page'><BusinessIndexContainer /></div>
        <AboutMeFooter/>
    </div>
    
)

export default Homepage