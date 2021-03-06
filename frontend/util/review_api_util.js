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

export const createReview = (businessId, review) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `/api/businesses/${businessId}/reviews`,
        data: {review}
    })
}



export const updateReview = (businessId, review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/businesses/${businessId}/reviews/${review.id}`,
        data: {review}
    })
)

export const deleteReview = (businessId, reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/businesses/${businessId}/reviews/${reviewId}`,
    })
)