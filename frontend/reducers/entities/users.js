import { RECEIVE_CURRENT_USER } from "../../actions/session";
import { RECEIVE_USERS } from "../../actions/user";

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_USERS:
            return action.users
        default:
            return state
    }
}

export default usersReducer