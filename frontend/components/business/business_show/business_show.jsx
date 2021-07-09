import React from 'react';
import NavBar from '../../nav_bar/nav_bar';
import ReviewIndexContainer from '../../review/review_index/review_index_container';
import ReviewSubmitContainer from '../../review/review_new/review_submit_container';

class BusinessShow extends React.Component{
    constructor(props){
        super(props) 
    }
    
    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchUsers().then(payload => (this.users = payload))
    }

    avgRating(){
        let sum = 0;
        this.props.business.reviews.forEach(review => {
            sum += review.rating
        })
        return (sum/this.props.business.reviews.length).toFixed(1)
    }


    render(){
        if (!this.props.business || !this.props.business.photoUrls || !this.users){
            return (
                <div>Loading...</div>
            )
        } else {
            const rating = this.avgRating()
            const {name, address, city, state, zipcode, phone, website, mon_fri, sat_sun} = this.props.business
            return(
                <div>
                    <div className='business-nav-bar-container'><NavBar/></div>
                    <div className='business-show-header-container'>
                        <div className="business-images-container">
                            {this.props.business.photoUrls.map((photoUrl, i) => (
                                <img key={i} className="business-images" src={photoUrl} />
                            ))}
                            <div className='business-info-container'>
                                <h1 className='business-name'>{name}</h1>
                                {this.props.business.categories.map((category, i) => (
                                    <div className='business-categories' key={i}>{category.category}</div>
                                ))}
                                <div>{rating} -- {this.props.business.reviews.length} reviews</div>
                            </div>
                        </div>  
                    </div>
                    <div className='business-show-body-container'>

                        <div className="business-schedule-container">
                            <div className="schedule-day">Monday: <div className='schedule-time'>{mon_fri}</div></div>
                            <div className="schedule-day">Tuesday: <div className='schedule-time'>{mon_fri}</div></div>
                            <div className="schedule-day">Wednesday: <div className='schedule-time'>{mon_fri}</div></div>
                            <div className="schedule-day">Thursday: <div className='schedule-time'>{mon_fri}</div></div>
                            <div className="schedule-day">Friday: <div className='schedule-time'>{mon_fri}</div></div>
                            <div className="schedule-day">Saturday: <div className='schedule-time'>{sat_sun}</div></div>
                            <div className="schedule-day">Sunday: <div className='schedule-time'>{sat_sun}</div></div>            
                        </div>

                        <div className ='business-location-container'>
                            <div>{address} {city}, {state} {zipcode}</div>
                        </div>

                        <div className='business-info-container'> 
                            <div>{phone}</div>
                            <div>{website}</div>
                        </div>

                        <div><ReviewSubmitContainer currentUser={this.props.currentUser}/></div>
                        <div><ReviewIndexContainer users={this.users.users} business={this.props.business}/></div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default BusinessShow