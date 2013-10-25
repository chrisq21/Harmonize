class SessionsController < ApplicationController
  def create
  	user = User.find_by(email: params[:user][:email])
  	if !user
  		redirect_to login_path, flash: { message: "Email Not Found" }
  	else
  		if params[:user][:password] == user[:password]
  			sign_in(user)
  			redirect_to user_path(user)
  		else
  			redirect_to login_path, flash: { message: "Password Is Incorrect" }
  		end
  	end
  end

  def new
  	@user = User.new
  	sign_out
  end

  def destroy
  	sign_out
  	redirect_to users_path
  end
end
