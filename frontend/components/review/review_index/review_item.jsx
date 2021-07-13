import React from 'react'
import { Link } from 'react-router-dom'

class ReviewItem extends React.Component{
    
    editDeleteButton(){
        const {currentUser, review} = this.props

        if (currentUser !== undefined && currentUser.id === review.user_id){
            return(
                <div className="edit-delete">
                    <Link to={`/businesses/${review.business_id}/reviews/${review.id}/update`}>
                        <button className="edit-delete-button">Update</button>
                    </Link>
                    <button className="edit-delete-button"
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

                <div className='reviewer-header'>
                    <div className='reivewer'>
                        <div><img className="user-icon" src="https://lh3.googleusercontent.com/pw/AM-JKLW4xJ1IDlinnfurjwqDmzDDcynW4aHH9XlMRpvL1SpGvoUwfYEv-31VVzFnJ4H8Xq-dcbPSM_STua6NS_lWjbTY-3N5sQJOw04bv6zRnqZdZvhqvWiG1LkM6RZFidU-UgpCODcPaoIZsfAMCOBp6kFU=s640-no?authuser=0"/></div>
                        <div className='reviewer-name'>{review.user.username}</div>
                    </div>
                    <div className='reviewer-edit-delete'>{this.editDeleteButton()}</div>
                </div>

                <div className='review-date'>{star(review.rating)} {review.created_at}</div>
                <div className='review-description'>{review.description}</div>
            </div>
        )
    }
}

export default ReviewItem