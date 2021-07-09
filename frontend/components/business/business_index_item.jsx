import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'

class BusinessIndexItem extends React.Component{

    constructor(props){
        super(props)
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
        let rating = Math.round(rate);
        var increment = 0;
        var max = 5; 

        while(increment < rating) {
            if ((rating - increment) > 1 ){
                stars.push(<FontAwesomeIcon className="one-star-rating" icon={faStar} color='red' key={rating-increment}/>);
                increment++;
            } else {
                if ((rating - increment) > 0.1 ){
                    stars.push(<FontAwesomeIcon className="half-star-rating" icon={faStarHalfAlt} color='red' key={rating-increment}/>);
                    increment++;
                }          
            } 
        }
        while(max > rating) {
            stars.push(<FontAwesomeIcon className='max-rating' icon={RegFontAwesome.faStar} color='red' key={max}/>);
            max--;
        }
        return stars;
    };

    render(){
        const rating = this.avgRating()
        return(
            <div>
                <div className="business-index-list">
                    <Link to={`/businesses/${this.props.business.id}`}>
                        <div className="business-index-picture-box"><img className="business-index-picture" src={this.props.business.photoUrls[0]} /> </div>
                        <div className="business-index-descript">
                            <div className="business-index-name">{this.props.business.name}</div>
                            {this.props.business.categories.map((category, i) => (
                                <div className='business-categories' key={i}>{category.category}</div>
                            ))}
                            <div className='bus-index-rating-container'>{this.star(rating)} - {this.props.business.reviews.length} reviews</div>
                        </div>
                    </Link>
                </div>
            </div>
            
        )
    }
}
    

export default BusinessIndexItem