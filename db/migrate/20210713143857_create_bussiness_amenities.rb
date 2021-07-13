class CreateBussinessAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :bussiness_amenities do |t|
      t.integer :business_id
      t.integer :amenity_id
    end
    add_index :bussiness_amenities, :business_id
    add_index :bussiness_amenities, :amenity_id
  end
end
