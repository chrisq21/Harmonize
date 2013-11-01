class Owner < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog
  # attr_accessible :title, :body
end
