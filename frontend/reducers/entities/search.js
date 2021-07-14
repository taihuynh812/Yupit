import { RECEIVE_SEARCH_RESULTS } from "../../actions/search";

const SearchReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults
        default:
            return state
    }
}

export default SearchReducer