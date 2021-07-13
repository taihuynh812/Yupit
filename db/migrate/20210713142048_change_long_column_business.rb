class ChangeLongColumnBusiness < ActiveRecord::Migration[5.2]
  def change
    rename_column :businesses, :long, :lng
  end
end
