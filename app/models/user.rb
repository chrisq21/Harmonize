class User < ActiveRecord::Base
	validates :first_name, :last_name, :email, :password, presence: true
	has_many :instruments
	has_many :genres
	# has_many :experiences
	has_many :links, as: :linkable
	has_one :seeking
end
