import React from 'react'
import { Link } from 'react-router-dom'

class ReviewItem extends React.Component{
    
    editDeleteButton(){
        const {currentUser, review} = this.props

        if (currentUser !== undefined && currentUser.id === review.user_id){
            return(
                <div className="edit-delete-button">
                    <Link to={`/businesses/${review.business_id}/reviews/${review.id}/update`}><button>Update</button></Link>
                    <button 
                        onClick={() => this.props.deleteReview(review.business_id, review.id)
                            .then(() => window.location.reload())}>
                        Delete
                    </button>
                </div>
            )   
        }
    }

    render(){
        const {review, star} = this.props
        return(
            <div className='review-item-container'>
                <div className='reviewer-name'>{review.user.username}</div>
                <div className='review-date'>{star(review.rating)} {review.created_at}</div>
                <div className='review-description'>{review.description}</div>
                {this.editDeleteButton()}
            </div>
        )
    }
}

export default ReviewItem