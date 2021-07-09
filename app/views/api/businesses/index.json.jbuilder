@businesses.each do |business|
    json.set! business.id do
        json.partial! '/api/businesses/business', business: business

        json.reviews do
            json.array! business.reviews do |review|
                json.extract! review, :id, :rating, :description, :user_id, :business_id
            end
        end

        json.photoUrls business.photos.map {|photo| url_for(photo)}
    end
end