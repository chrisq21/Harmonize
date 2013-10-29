class AddCurrentBandToUser < ActiveRecord::Migration
  def change
    add_column :users, :current_band, :string
  end
end
