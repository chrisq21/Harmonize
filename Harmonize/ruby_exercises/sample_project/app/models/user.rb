class User < ActiveRecord::Base

	has_many :posts

	attr_accessible :age, :email, :name, :password_digest

	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-x]+)\z/i

	validates :name, presence: true,
					 length: { in: 2..40 }

	validates :email, presence: true,
					  length: { in: 3..60 },
					  format: { with: EMAIL_REGEX },
					  uniqueness: { case_sensitive: false }

	validates :age, presence: true,
					numericality: true

	validates :password, presence: true,
						 length: { in: 6..40 }

	before_save { self.email.downcase! }

	has_secure_password

end
