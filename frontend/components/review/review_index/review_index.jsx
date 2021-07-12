import React from 'react'


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
            return(
                <div className="review-index-wrapper">
                    <div className='review-index-container'>
                        <h1 className="recommended-reviews">Recommended Reviews</h1>
                        <br />
                        {reviews.map((review, i) => {
                            return (
                            <div className='review-details-container' key={i}>
                                <div className='reviewer-name'>{review.user.username}</div>
                                <div className='review-date'>{this.props.star(review.rating)} {review.created_at}</div>
                                <div className='review-description'>{review.description}</div>
                            </div>    
                            )})}
                    </div>
                </div>
            )
        }
        
    }
}

export default ReviewIndex