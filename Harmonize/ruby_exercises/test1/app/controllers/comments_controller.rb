class CommentsController < ApplicationController
  def index
  	@comments = Comment.all

  	@comment = Comment.new(:name => "Jerel")
  	@comment.save
  end

  def new
  	puts session
  	render :text => session
  end

  def create
  	puts params

  	render :text => params
  end
end
