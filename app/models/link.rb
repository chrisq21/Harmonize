class Link < ActiveRecord::Base
	belongs_to :linkable, dependent: :destroy, polymorphic: true
end
