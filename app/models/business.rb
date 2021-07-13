class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode, :phone, :lat, :lng, presence:true

    has_many :reviews,
        class_name: :Review,
        foreign_key: :business_id

    has_many :photos,
        through: :reviews,
        source: :pictures_attachments

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :business_id

    has_many :categories,
        through: :business_categories,
        source: :category

end
