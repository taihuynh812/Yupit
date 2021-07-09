import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../../actions/review"

const reviewReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review })
        default:
            return state
    }
}

export default reviewReducer