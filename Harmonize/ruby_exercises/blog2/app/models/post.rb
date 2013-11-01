class Post < ActiveRecord::Base
	belongs_to :blog
	belongs_to :user
	has_many :messages

	attr_accessible :content, :title

	validates :title, :content, presence: true, length: { minimum: 2 }
end
