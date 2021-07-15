import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'

class BusinessListItem extends React.Component{

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
        // debugger
        return(
            <div id="all-search-results">
                <Link to={`/businesses/${id}`}>
                    <div className="business-search-list">

                        <div className="business-search-picture-box">
                            <img className="business-search-picture" src={photoUrls[3]} /> 
                        </div>

                        <div className="business-search-descript">
                            <div className="business-search-name">{this.props.order + 1}. {name}</div>
                            <div className='business-search-rating'>{this.star(rating)} {reviews.length} reviews</div>
                            {categories.map((category, i) => (
                                <div className='business-search-categories' key={i}>
                                    {category.category} 
                                    {i < categories.length - 1 ? "," : ""}
                                </div>
                            ))}
                            
                            <div className='business-search-review'>{reviews[0].description}</div>
                        </div>

                    </div>
                </Link>
            </div>
            
        )
    }
}
    

export default BusinessListItem