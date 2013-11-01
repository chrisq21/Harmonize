class Blog < ActiveRecord::Base
	has_many :posts

 	attr_accessible :description, :name

 	validates :description, :presence => true

 	validates :name, :presence => true
end
