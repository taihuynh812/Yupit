class BusinessAmenity < ApplicationRecord

    validates :business_id, :amenity_id, presence:true
    
    belongs_to :business,
        class_name: :Business,
        foreign_key: :business_id

    belongs_to :amenity,
        class_name: :Amenity,
        foreign_key: :amenity_id
end