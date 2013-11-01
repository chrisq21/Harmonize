class CreateNinjas < ActiveRecord::Migration
  def change
    create_table :ninjas do |t|
      t.references :dojo
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
    add_index :ninjas, :dojo_id
  end
end
