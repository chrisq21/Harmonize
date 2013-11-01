class Instrument < ActiveRecord::Base
  belongs_to :user
  has_many :experiences, dependent: :destroy
end
