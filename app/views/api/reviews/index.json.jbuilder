@reviews.each do |review|
    json.set! review.id do
        json.partial! '/api/reviews/review', review: review
        json.user {json.partial! '/api/users/user', user: review.user}
        json.created_at review.created_at.to_date
    end
end