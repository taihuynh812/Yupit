import React from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'


class ReviewSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rating: 0,
            description: "",
            user_id: this.props.user_id,
            business_id: this.props.match.params.businessId
        }
        this.hover = this.hover.bind(this)
        this.submit = this.submit.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    hover(e){
        const ratingText = document.getElementById('rating-text')
        if (e === 1) ratingText.innerText = 'Not good'
        else if (e === 2) ratingText.innerText = 'Could\'ve been better'
        else if (e === 3) ratingText.innerText = 'OK'
        else if (e === 4) ratingText.innerText = 'Good'
        else if (e === 5) ratingText.innerText = 'Great'
    }

    update(field){
        // debugger
        return e => this.setState( {[field]: e.currentTarget.value})
    }

    updateRating(e){
        this.setState({rating: e})
        const ratingText = document.getElementById('rating-text')
        if (e === 1) ratingText.innerText = 'Not good'
        else if (e === 2) ratingText.innerText = 'Could\'ve been better'
        else if (e === 3) ratingText.innerText = 'OK'
        else if (e === 4) ratingText.innerText = 'Good'
        else if (e === 5) ratingText.innerText = 'Great'
    }

    submit(){
        e.preventDefault()
        this.props.createReview(this.state).then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <h1>Write your review for {this.props.business.name}</h1>
                    <div className='review-submit-rating-container'>
                        <Rating 
                            initialRating= {this.state.rating}
                            className= "review-submit-rating"
                            emptySymbol= {<FontAwesomeIcon icon={RegFontAwesome.faStar} color='red' />}
                            fullSymbol= {<FontAwesomeIcon icon={faStar} color='red'/>}
                            onHover= {this.hover}
                            onClick= {this.updateRating}
                        />
                        <p id="rating-text">Select your rating</p>
                    </div>
                    <textarea 
                        className="review-submit-description" 
                        value={this.state.description} 
                        onChange={this.update('description')}>
                    </textarea>
                </form>
            </div>
            
        )
    }
}

export default ReviewSubmit