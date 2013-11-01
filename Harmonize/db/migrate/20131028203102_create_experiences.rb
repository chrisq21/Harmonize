class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.references :instrument, index: true
      t.string :title
      t.text :description
      t.string :length

      t.timestamps
    end
  end
end
