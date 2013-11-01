class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :linkable_id
      t.string :linkable_type
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
