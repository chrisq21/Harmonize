class UsersController < ApplicationController
	before_action :signed_in_user, only: [:edit, :update, :destroy]

	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
  	if @user.save
  			sign_in(@user)
  		  redirect_to user_path(@user[:id])
  	else
  		redirect_to new_user_path, flash: { errors: @user.errors.full_messages }
  	end
	end

	def edit
		
	end

	def update
		
	end

	def signed_in_user
    redirect_to login_path, notice: "Please sign in." unless signed_in? 
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
