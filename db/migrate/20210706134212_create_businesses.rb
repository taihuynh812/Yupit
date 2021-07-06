class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.string :category, null: false
      t.string :phone, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :website

      t.timestamps
    end
    add_index :businesses, :name, unique:true
  end
end
