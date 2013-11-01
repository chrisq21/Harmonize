class Comment < ActiveRecord::Base
  attr_accessible :description, :name
  validates :description, :name, :presence => true
end
