class Experience < ActiveRecord::Base
  belongs_to :instrument, dependent: :destroy
end
