class Message < ActiveRecord::Base
	belongs_to :post
	belongs_to :user

	attr_accessible :author, :message

	validates :message, presence: true, length: { minimum: 2 }
end
