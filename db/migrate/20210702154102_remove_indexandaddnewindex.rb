class RemoveIndexandaddnewindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, [:username, :email, :session_token]
    add_index :users, :username, unique:true
    add_index :users, :email, unique:true
    add_index :users, :session_token, unique:true
  end
end
