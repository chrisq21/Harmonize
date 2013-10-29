class RemoveItemsFromUsersAndAddBio < ActiveRecord::Migration
  def change
    remove_column :users, :main_instruments, :string
    remove_column :users, :other_instruments, :string
    remove_column :users, :main_genres, :string
    remove_column :users, :other_genres, :string
    add_column :users, :bio, :text
  end
end
