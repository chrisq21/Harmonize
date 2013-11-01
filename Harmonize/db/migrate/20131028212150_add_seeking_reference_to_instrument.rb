class AddSeekingReferenceToInstrument < ActiveRecord::Migration
  def change
  	add_column :instruments, :seeking_id, :integer
    add_index :instruments, :seeking_id
  end
end
