class AddZipToUser < ActiveRecord::Migration
  def change
    add_column :users, :zip, :integer
  end
end
