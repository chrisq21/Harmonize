class User < ActiveRecord::Base
	has_many :posts
	has_many :messages
	has_many :owners
	has_many :blogs, through: :owners

 	attr_accessible :email_address, :first_name, :last_name

 	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	validates :first_name, :last_name, presence: true, length: { in: 2..30 }
	validates :email_address, presence: true, format: { with: EMAIL_REGEX }, uniqueness: { case_sensitive: false }
end
