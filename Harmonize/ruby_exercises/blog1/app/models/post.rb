class Post < ActiveRecord::Base
	belongs_to :blog

	attr_accessible :content, :title

	validates :content, :presence => true

	validates :title, :presence => true,
					  :length => { :minimum => 7 }
end
