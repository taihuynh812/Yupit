import * as BusinessAPIUtil from "../util/business_api_util";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

export const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const searchBusinesses = search => {
    return dispatch => {
        return (
            BusinessAPIUtil.searchBusinesses(search)
                .then(results => dispatch(receiveSearchResults(results)))
        )
    }
}

