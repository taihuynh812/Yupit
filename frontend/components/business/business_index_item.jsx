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
        const rating = this.avgRating()
        const {id, categories, name, reviews, photoUrls} = this.props.business
        return(
            <div>
                <div className="business-index-list">
                    <Link to={`/businesses/${id}`}>
                        <div className="business-index-picture-box">
                            <img className="business-index-picture" src={photoUrls[0]} /> 
                        </div>
                        <div className="business-index-descript">
                            <div className="business-index-name">{name}</div>
                            <div className='business-index-rating'>{this.star(rating)} {reviews.length} reviews</div>
                            {categories.map((category, i) => (
                                <div className='business-index-categories' key={i}>
                                    {category.category} 
                                    {i < categories.length - 1 ? "," : ""}
                                </div>
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
            
        )
    }
}
    

export default BusinessIndexItem