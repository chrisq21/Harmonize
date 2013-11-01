class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.references :user, index: true
      t.string :genre

      t.timestamps
    end
  end
end
