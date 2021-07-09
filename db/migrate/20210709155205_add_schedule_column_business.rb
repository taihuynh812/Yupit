class AddScheduleColumnBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :mon_fri, :string
    add_column :businesses, :sat_sun, :string
  end
end

