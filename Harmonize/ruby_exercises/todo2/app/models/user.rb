class User < ActiveRecord::Base
  attr_accessible :email_address, :first_name, :hashed_password, :last_name
end
