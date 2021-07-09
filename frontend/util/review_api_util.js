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

