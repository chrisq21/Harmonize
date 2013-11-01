class Ninjas < ActiveRecord::Base
	attr_accessible :first_name, :last_name

	belongs_to :dojos

	validates :first_name, :presence => true

	validates :last_name, :presence => true
end
