class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.references :blod
      t.references :user
      t.string :title
      t.text :content

      t.timestamps
    end
    add_index :posts, :blod_id
    add_index :posts, :user_id
  end
end
