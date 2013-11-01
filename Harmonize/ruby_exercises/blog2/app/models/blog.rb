class Blog < ActiveRecord::Base
	has_many :posts
	has_many :owners
	has_many :users, through: :owners

 	attr_accessible :description, :name

 	validates :name, :description, presence: true, length: { minimum: 2 }
end
