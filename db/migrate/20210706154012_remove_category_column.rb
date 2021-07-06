class RemoveCategoryColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :category
    change_column_null :business_categories, :business_id, false
    change_column_null :business_categories, :category_id, false
  end
end
