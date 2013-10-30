class Seeking < ActiveRecord::Base
  belongs_to :user
  has_many :instruments, dependent: :destroy
end
