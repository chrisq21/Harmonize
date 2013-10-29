class CreateSeekings < ActiveRecord::Migration
  def change
    create_table :seekings do |t|
      t.references :user, index: true

      t.timestamps
    end
  end
end
