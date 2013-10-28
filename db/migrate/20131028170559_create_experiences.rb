class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :title
      t.text :description
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
