class Dojo < ActiveRecord::Base
	has_many :ninja

	attr_accessible :city, :name, :state

	validates :city, :presence => true

	validates :name, :presence => true,
					 :length => { :minimum => 2 }

	validates :state, :presence => true,
					  :length => { :minimum => 2 }
end
