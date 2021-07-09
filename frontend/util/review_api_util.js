export const fetchReviews = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}/reviews`
    })
)

export const fetchReview = (businessId, reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}/reviews/${reviewId}`
    })
)

export const createReview = (businessId, review) => (
    $.ajax({
        method: 'POST',
        url: `/api/business/${businessId}/reviews`,
        data: {review}
    })
)

export const updateReview = (businessId, review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/business/${businessId}/reviews/${review.id}`,
        data: {review}
    })
)

export const deleteReview = (businessId, reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/business/${businessId}/reviews/${reviewId}`,
    })
)