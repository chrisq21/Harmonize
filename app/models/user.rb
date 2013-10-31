class User < ActiveRecord::Base
	validates :first_name, :last_name, :email, :password, :city, presence: true
	has_many :instruments, dependent: :destroy
	has_many :genres, dependent: :destroy
	has_many :messages, dependent: :destroy
	has_many :links, as: :linkable, dependent: :destroy
	has_one :seeking, dependent: :destroy

end
