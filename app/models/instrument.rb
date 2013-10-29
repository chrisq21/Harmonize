class Instrument < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  has_many :experiences
end
