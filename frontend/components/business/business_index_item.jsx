import React from 'react'
import { Link } from 'react-router-dom'

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
                            <div>{rating} -- {this.props.business.reviews.length} reviews</div>
                        </div>
                    </Link>
                </div>
            </div>
            
        )
    }
}
    

export default BusinessIndexItem