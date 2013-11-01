class User < ActiveRecord::Base
	attr_accessible :age, :created_at, :email_address, :first_name, :last_name, :updated_at

	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

	validates :age, :presence => true,
				    :inclusion => (10...150),
				    :numericality => { :only_integer => true }

	validates :email_address, :presence => true,
							  :format => { with: EMAIL_REGEX }

	validates :first_name, :presence => true,
						   :length => { :minimum => 2 }

	validates :last_name, :presence => true,
						  :length => { :minimum => 2 }
 end
