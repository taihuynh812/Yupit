class Review < ApplicationRecord

    validates :description, :rating, :user_id, :business_id, presence:true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :business_id,
        class_name :Business,
        foreign_key: :business_id
end
