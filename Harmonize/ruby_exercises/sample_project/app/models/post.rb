class Post < ActiveRecord::Base

	belongs_to :user
	attr_accessible :message

	validates :message, presence: true,
						length: { in: 2..400 }
end
