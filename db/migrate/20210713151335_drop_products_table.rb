class DropProductsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :bussiness_amenities

    create_table :business_amenities do |t|
      t.integer :business_id
      t.integer :amenity_id
    end
    add_index :business_amenities, :business_id
    add_index :business_amenities, :amenity_id
  end
end
