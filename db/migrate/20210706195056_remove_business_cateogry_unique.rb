class RemoveBusinessCateogryUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :business_categories, :business_id
    remove_index :business_categories, :category_id
    add_index :business_categories, :business_id
    add_index :business_categories, :category_id
  end
end
