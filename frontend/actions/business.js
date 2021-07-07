import * as BusinessAPIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES"
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'

export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

export const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchBusinesses = () => (dispatch) => (
    BusinessAPIUtil.fetchBusinesses()
        .then(payload => dispatch(receiveBusinesses(payload)))
)

export const fetchBusiness = (businessId) => (dispatch) => (
    BusinessAPIUtil.fetchBusinesses(businessId)
        .then(payload => dispatch(receiveBusinesses(payload)))
)