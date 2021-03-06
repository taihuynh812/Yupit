import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../../actions/session"


const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []
        default: 
            return []
    }
}

export default sessionErrorsReducer