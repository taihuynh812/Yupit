import React from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import * as RegFontAwesome from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import NavbarGreetingContainer from '../../nav_bar/navbar_greeting_container';

class ReviewSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rating: "",
            user_id: this.props.user_id,
        }
        this.hover = this.hover.bind(this)
        this.submit = this.submit.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId).then(() => this.setState( {business_id: this.props.business.id} ))
    }

    componentWillUnmount(){
        this.props.receiveReviewErrors([])
    }

    hover(e){
        if (this.state.rating === ""){
            const ratingText = document.getElementById('rating-text')
            if (e === 1) ratingText.innerText = 'Not good'
            else if (e === 2) ratingText.innerText = 'Could\'ve been better'
            else if (e === 3) ratingText.innerText = 'OK'
            else if (e === 4) ratingText.innerText = 'Good'
            else if (e === 5) ratingText.innerText = 'Great'
            else {
                ratingText.innerText = "Select your rating"
            }
        }
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
        const {business_id} = this.state
        e.preventDefault()
        this.props.createReview(business_id, this.state)
            .then(() => this.props.history.push(`/businesses/${business_id}`))
    }

    showErrors(){
        if (this.props.errors.length !== 0){
            if (this.props.errors[0].includes("Rating")){
                return  (
                    <div className="review-submit-errors">
                        To submit your review, please select a star rating for this business.
                    </div>
                )
            } else {
                return (
                    <div className="review-submit-errors">
                        To submit your review, please explain your rating to others.
                    </div>
                )
            }
        }
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
                            <Link className='nav-bar-logo' to='/'>
                                <img className="nav-bar-yupit-logo" src="https://lh3.googleusercontent.com/pw/AM-JKLVGlt2Z46Kdqcrwfyey_PGG8Lrr1Amu9TB4yKE5_1C71ypwoy96PzwUb_6zmFc7CPpUvSYSOzS8f87dAzaqmV-NnA0XzR3NOf8f_c-LI6FGZ55cUNoTFK6ApvMmlNM4koEyK2MTIrZDIz6fbv4piEc=w522-h478-no?authuser=0" />
                            </Link>
                            <div className='nav-bar-session'><NavbarGreetingContainer/></div>
                        </div>
                    </div>
                    {/* BELOW NAV-BAR */}
                    <div className='review-form-body-container'>
                        <div className='review-form-body-container-inner'>

                            {/* REVIEW-FORM-HEADER */}
                            <div className='review-form-header'>
                                <div className='review-business-name'>{this.props.business.name}</div>
                                <div className='review-guidelines'>Read our review guidelines</div>
                            </div>
                            
                            {/* REVIEW FORM */}
                            <form className='review-submit-form' onSubmit={this.submit}>
                                <div className='review-submit-rating-container'>
                                    <Rating 
                                        initialRating= {this.state.rating}
                                        className= "review-submit-stars"
                                        emptySymbol= {<FontAwesomeIcon icon={RegFontAwesome.faStar} color='red' />}
                                        fullSymbol= {<FontAwesomeIcon icon={faStar} color='red'/>}
                                        onHover= {this.hover}
                                        onClick= {this.updateRating}
                                    />
                                    <p id="rating-text">Select your rating</p>
                                    <textarea 
                                        className="review-submit-description" 
                                        value={this.state.description} 
                                        onChange={this.update('description')}>
                                    </textarea>
                                    <div className='errors-container'>{this.showErrors()}</div>
                                </div>
                                <button type='submit' className="review-submit-button">Post Review</button>
                            </form>

                        </div>
                    </div>
                </div>
                
            )
        }
    }
}

export default ReviewSubmit