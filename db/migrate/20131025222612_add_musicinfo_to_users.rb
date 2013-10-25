class AddMusicinfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :main_instruments, :string
    add_column :users, :other_instruments, :string
    add_column :users, :main_genres, :string
    add_column :users, :other_genres, :string
    add_column :users, :links, :string
  end
end
