class Amenity < ApplicationRecord
    validates :amenity, presence:true

    has_many :business_amenities,
        class_name: :BusinessAmenity,
        foreign_key: :amenity_id

    has_many :businesses,
        through: :business_amenities,
        source: :business
end