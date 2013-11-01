class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :user, index: true
      t.string :title
      t.text :description
      t.integer :from_id

      t.timestamps
    end
  end
end
