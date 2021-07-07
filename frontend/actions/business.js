import * as BusinessAPIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES"


export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})


export const fetchBusinesses = () => (dispatch) => (
    BusinessAPIUtil.fetchBusinesses()
        .then(payload => dispatch(receiveBusinesses(payload)))
)

