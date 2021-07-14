

export const fetchBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses',
        error: (err) => console.log(err)
    })
)

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`,
        error: (err) => console.log(err)
    })
)

export const searchBusinesses = (search) => (
    $.ajax({
        method: 'GET',
        url: 'api/businesses/search',
        data: {search}
    })
)