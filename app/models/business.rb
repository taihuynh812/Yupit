class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode, :phone, :lat, :long, presence:true
    has_many_attached :photos

    has_many :reviews,
        class_name: :Review,
        foreign_key: :business_id

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :business_id

    has_many :categories,
        through: :business_categories,
        source: :category

end
