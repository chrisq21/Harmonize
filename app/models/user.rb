class User < ActiveRecord::Base
	validates :first_name, :last_name, :email, :password, :city, presence: true
end
