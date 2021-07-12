import React from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import NavbarGreetingContainer from '../../nav_bar/navbar_greeting_container';

class ReviewUpdate extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rating: "",
            description: "",
            user_id: "",
            business_id: "",
            id: ""
        }
        this.hover = this.hover.bind(this)
        this.submit = this.submit.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId).then(() => this.setState( {business_id: this.props.business.id} ))
            .then(this.props.fetchReviews(this.props.match.params.businessId))
                .then(() => this.setState({
                    rating: this.props.review.rating,
                    description: this.props.review.description,
                    user_id: this.props.user_id,
                    id: this.props.review.id
            }))
    }

    componentWillUnmount(){
        this.props.receiveReviewErrors([])
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

    submit(e){
        // debugger
        const {business_id} = this.state
        e.preventDefault()
        this.props.updateReview(business_id, this.state)
            // .then(() => this.props.history.push(`/businesses/${business_id}`))
    }

    showErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }

    render(){
        if (!this.props.business){
            return(
                <div>Loading....</div>
            )
        } else {
            return(
                <div className='review-submit-wrapper'>
                    <div className='review-nav-bar'>
                        <div className='nav-bar-wrapper'>
                            <Link className='nav-bar-logo' to='/'><img className="nav-bar-yupit-logo" src="https://lh3.googleusercontent.com/pw/AM-JKLVGlt2Z46Kdqcrwfyey_PGG8Lrr1Amu9TB4yKE5_1C71ypwoy96PzwUb_6zmFc7CPpUvSYSOzS8f87dAzaqmV-NnA0XzR3NOf8f_c-LI6FGZ55cUNoTFK6ApvMmlNM4koEyK2MTIrZDIz6fbv4piEc=w522-h478-no?authuser=0" /></Link>
                            <div className='nav-bar-session'><NavbarGreetingContainer/></div>
                        </div>
                    </div>
                    <form className='review-submit-form' onSubmit={this.submit}>
                        <h1>Write your review for {this.props.business.name}</h1>
                        {this.showErrors()}
                        <div className='review-submit-rating-container'>
                            <Rating 
                                initialRating= {this.state.rating}
                                className= "review-submit-rating"
                                emptySymbol= {<FontAwesomeIcon icon={RegFontAwesome.faStar} color='red' />}
                                fullSymbol= {<FontAwesomeIcon icon={faStar} color='red'/>}
                                onHover= {this.hover}
                                onClick= {this.updateRating}
                            />
                            <p id="rating-text"></p>
                            <textarea 
                                className="review-submit-description" 
                                value={this.state.description} 
                                onChange={this.update('description')}>
                            </textarea>
                        </div>
                        <button type='submit' className="Review-submit-button">Update Review</button>
                    </form>
                </div>
                
            )
        }
    }
}

export default ReviewUpdate