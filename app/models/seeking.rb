class Seeking < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  has_many :instruments
end
