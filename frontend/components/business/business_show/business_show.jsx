import React from 'react';
import NavBar from '../../nav_bar/nav_bar';
import ReviewIndexContainer from '../../review/review_index_container';

class BusinessShow extends React.Component{

    
    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    avgRating(){
        let sum = 0;
        this.props.business.reviews.forEach(review => {
            sum += review.rating
        })
        return (sum/this.props.business.reviews.length).toFixed(1)
    }


    render(){
        if (!this.props.business || !this.props.business.photoUrls){
            console.log('loading.........')
            return (
                <div>Loading...</div>
            )
        } else {
            const rating = this.avgRating()
            const {name, address, city, state, zipcode, phone, website} = this.props.business
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
                        <div className ='business-location-container'>
                            <div>{address} {city}, {state} {zipcode}</div>
                        </div>
                        <div className='business-info-container'> 
                            <div>{phone}</div>
                            <div>{website}</div>
                        </div>
                        <div><ReviewIndexContainer business={this.props.business}/></div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default BusinessShow