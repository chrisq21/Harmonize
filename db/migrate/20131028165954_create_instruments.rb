class CreateInstruments < ActiveRecord::Migration
  def change
    create_table :instruments do |t|
      t.string :instrument
      t.integer :experience

      t.timestamps
    end
  end
end
