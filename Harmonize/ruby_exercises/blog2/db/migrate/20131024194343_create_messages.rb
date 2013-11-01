class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :post
      t.references :user
      t.string :author
      t.text :message

      t.timestamps
    end
    add_index :messages, :post_id
    add_index :messages, :user_id
  end
end
