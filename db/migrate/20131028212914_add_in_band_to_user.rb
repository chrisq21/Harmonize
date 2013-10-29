class AddInBandToUser < ActiveRecord::Migration
  def change
    add_column :users, :inband, :boolean
  end
end
