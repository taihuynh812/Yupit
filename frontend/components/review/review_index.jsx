import React from 'react'


class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.users
    }

    render(){
        if (this.props.users.length < 1){
            return (
                <div>Loading....</div>
            )
        } else {
            return(
                <div className="review-index-wrapper">
                    <div className='review-index-container'>
                        {this.props.reviews.map((review, i) => (
                            <div className="review-container" key={i}>
                                <div className="reviewer-name">{this.state[review.user_id].username}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        
    }
}

export default ReviewIndex