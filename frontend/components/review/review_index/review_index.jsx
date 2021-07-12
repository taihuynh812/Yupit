import React from 'react'
import ReviewItem from './review_item'

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.business.id)
    }



    render(){
        if (this.props.reviews.length < 1){
            return (
                <div>Loading....</div>
            )
        } else {
            const {reviews} = this.props
            // debugger
            return(
                <div className="review-index-wrapper">
                    <div className='review-index-container'>
                        <h1 className="recommended-reviews">Recommended Reviews</h1>
                        <br />
                        {reviews.map((review, i) => {
                            return (
                                <div className='review-details-container' key={i}>
                                    <ReviewItem 
                                        currentUser={this.props.currentUser} 
                                        review={review} 
                                        star={this.props.star}
                                        deleteReview={this.props.deleteReview}
                                    />
                                </div>    
                            )})}
                    </div>
                </div>
            )
        }
        
    }
}

export default ReviewIndex