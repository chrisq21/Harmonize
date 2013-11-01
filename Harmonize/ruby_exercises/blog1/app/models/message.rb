class Message < ActiveRecord::Base
	belongs_to :post

	attr_accessible :author, :message

	validates :author, :presence => true

	validates :message, :presence => true,
						:length => { :minimum => 15 }
end
