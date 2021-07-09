import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"


export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const removeReviews = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})



export const fetchReview = (businessId, reviewId) => (dispatch) => (
    ReviewAPIUtil.fetchReview(businessId, reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const fetchReviews = (businessId) => (dispatch) => (
    ReviewAPIUtil.fetchReviews(businessId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const createReview = (businessId, review) => (dispatch) => (
    ReviewAPIUtil.createReview(businessId, review)
        .then(payload => dispatch(receiveReview(payload)),
            err => dispatch(receiveReviewErrors(err))
))

export const updateReview = (businessId, review) => (dispatch) => (
    ReviewAPIUtil.updateReview(businessId, review)
        .then(payload => dispatch(receiveReview(payload)),
            err => dispatch(receiveReviewErrors(err))
))

export const deleteReview = (businessId, reviewId) => (dispatch) => (
    ReviewAPIUtil.deleteReview(businessId, reviewId)
        .then((review) => dispatch(removeReview(review.id)))
)