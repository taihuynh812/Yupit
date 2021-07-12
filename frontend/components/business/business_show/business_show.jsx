import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../nav_bar/nav_bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faPhone, faExternalLinkAlt, faDirections } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'
import ReviewIndexContainer from '../../review/review_index/review_index_container';

class BusinessShow extends React.Component{
    constructor(props){
        super(props) 
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchUsers()
    }
    
    componentDidMount(){
        // debugger
        // this.props.fetchBusiness(this.props.match.params.businessId)
        // this.props.fetchUsers().then(payload => (this.users = payload))
    }

    avgRating(){
        let sum = 0;
        this.props.business.reviews.forEach(review => {
            sum += review.rating
        })
        return (sum/this.props.business.reviews.length).toFixed(1)
    }

    star(rate) {
        let stars = [];
        let rating = rate;
        var increment = 0;
        var max = 5; 

        while(increment < rating) {
            if ((rating - increment) >= 1 ){
                stars.push(<FontAwesomeIcon className="one-star-rating" icon={faStar} color='red' key={rating-increment}/>);
                increment++;
            } else {
                if ((rating - increment) > 0.1 ){
                    stars.push(<FontAwesomeIcon className="half-star-rating" icon={faStarHalfAlt} color='red' key={rating-increment}/>);
                    increment++;
                }          
            } 
        }
        while(max - rating >= 1) {
            stars.push(<FontAwesomeIcon className='max-rating' icon={RegFontAwesome.faStar} color='red' key={max}/>);
            max--;
        }
        return stars;
    };

    render(){
        // debugger
        if (!this.props.business || !this.props.users){
            return (
                <div>Loading...</div>
            )
        } else {
            // debugger
            const rating = this.avgRating()
            const {id, name, address, city, state, zipcode, phone, website, mon_fri, sat_sun, categories, photoUrls, reviews} = this.props.business
            return(
                <div>
                    {/* --------------NAV BAR---------------- */}
                    <div className='business-nav-bar-container'><NavBar/></div>
                    {/* --------------PHOTO HEADER---------------- */}
                    <div className="business-show-photo-header-outter">
                        <div className='business-show-header-container'>

                            <div className='business-info-container'>
                                <div className="business-info">
                                    <h1 className='business-name'>{name}</h1>
                                    {categories.map((category, i) => (
                                        <div className='business-categories' key={i}>
                                            {category.category}
                                            {i < categories.length - 1 ? "," : ""}
                                        </div>
                                    ))}
                                    <div className='business-show-rating'>{this.star(rating)}  {reviews.length} reviews</div>
                                </div>
                            </div>

                            <div className="business-images-container">
                                {photoUrls.map((photoUrl, i) => (
                                    <img key={i} className="business-images" src={photoUrl} />
                                ))}
                            </div>  
                            
                        </div>
                    </div>
                    {/* --------------BUSINESS-SHOW-BODY---------------- */}
                    <div className='business-show-body-container-outter'>
                        <div className='business-show-body-container-inner'>
                            <div className='business-show-body-table-layout'>
                                {/* --------------LEFT SIDE---------------- */}
                                <div className='body-container-left'>
                                    <Link to={`/businesses/${id}/reviews/new`}><button className="business-show-write-review"><FontAwesomeIcon icon={RegFontAwesome.faStar} color='white'/> Write a Review</button></Link>
                                
                                <div className='location-and-schedule'>
                                    <div className='location-container'>
                                        <div className ='business-location-container'>
                                            <div>{address} {city}, {state} {zipcode}</div>
                                        </div>
                                    </div>

                                    <div className='schedule-container'>
                                        <div className="business-schedule-container">
                                            <div className="schedule">
                                                <div className="schedule-day">Monday: </div> 
                                                <div className='schedule-time'>{mon_fri}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Tuesday: </div> 
                                                <div className='schedule-time'>{mon_fri}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Wednesday: </div> 
                                                <div className='schedule-time'>{mon_fri}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Thursday: </div> 
                                                <div className='schedule-time'>{mon_fri}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Friday: </div> 
                                                <div className='schedule-time'>{mon_fri}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Saturday: </div> 
                                                <div className='schedule-time'>{sat_sun}</div></div>
                                            <div className="schedule">
                                                <div className="schedule-day">Sunday: </div> 
                                                <div className='schedule-time'>{sat_sun}</div></div>            
                                        </div>
                                    </div>
                                </div>

                                    <div><ReviewIndexContainer currentUser={this.props.currentUser} star={this.star} users={this.props.users} business={this.props.business}/></div>
                                </div>   
                                {/* --------------RIGHT SIDE---------------- */}
                                <div className='body-container-right'>
                                    <div className='business-contact-container'> 
                                        <div className="business-contact-phone">
                                            <div>{phone}</div>
                                            <div className='contact-icon'><FontAwesomeIcon icon={faPhone}/></div>  
                                        </div>
                                        <div className="business-contact-website">
                                            <div>{website}</div>
                                            <div className='contact-icon'><FontAwesomeIcon icon={faExternalLinkAlt}/></div>  
                                        </div>
                                        <div className="business-contact-direction">
                                            <div>{address}</div>
                                            <div className='contact-icon'><FontAwesomeIcon icon={faDirections}/></div>  
                                        </div>
                                        <div className="business-contact-message">
                                            <div>Message the business</div>
                                            <div className='contact-icon'><FontAwesomeIcon icon={RegFontAwesome.faComment}/></div>  
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default BusinessShow