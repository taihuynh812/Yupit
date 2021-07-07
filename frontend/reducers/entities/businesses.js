import { RECEIVE_BUSINESSES } from "../../actions/business"

const businessesReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch(action.type){
        case RECEIVE_BUSINESSES:
            return action.businesses
        default:
            return state
    }
}

export default businessesReducer