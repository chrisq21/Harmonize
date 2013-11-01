class Dojos < ActiveRecord::Base
	attr_accessible :city, :name, :state

	has_many :ninjas

	validates :city, :presence => true

	validates :name, :presence => true,
					 :length => { :minimum => 2 }

	validates :state, :presence => true,
					  :length => { :minimum => 2 }
end