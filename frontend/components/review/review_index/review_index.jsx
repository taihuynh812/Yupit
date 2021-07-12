import React from 'react'
import { Link } from 'react-router-dom'

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.business.id)
    }

    editDeleteButton(review_id, user_id=null){
        const {currentUser} = this.props
        // debugger
        if (currentUser !== undefined || currentUser !== null){
            if (currentUser && currentUser.id === user_id){
                return(
                    <div className="edit-delete-button">
                        <Link to={`/businesses/${this.props.business.id}/reviews/${review_id}/update`}><button>Update</button></Link>
                        <button onClick={() => this.props.deleteReview}>Delete</button>
                    </div>
                )
            }
        }
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
                                <div className='reviewer-name'>{review.user.username}</div>
                                <div className='review-date'>{this.props.star(review.rating)} {review.created_at}</div>
                                <div className='review-description'>{review.description}</div>
                                {this.editDeleteButton(review.id, review.user.id)}
                            </div>    
                            )})}
                    </div>
                </div>
            )
        }
        
    }
}

export default ReviewIndex