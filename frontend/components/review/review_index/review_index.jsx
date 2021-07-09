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
                        <h1>Reviews</h1>
                        {reviews.map((review, i) => {
                            return (
                            <div className='review-details' key={i}>
                                <div>{review.user.username}</div>
                                <div>{review.created_at}</div>
                                <div>{review.rating}</div>
                                <div>{review.description}</div>
                            </div>    
                            )})}
                    </div>
                </div>
            )
        }
        
    }
}

export default ReviewIndex