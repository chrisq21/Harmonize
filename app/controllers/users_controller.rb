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
		instrument_string = ''
		instruments = Array.new
		params[:instruments].each do |instrument|
			instruments.push(instrument[1])
		end
		instrument_string = instruments.join(',')
		render text: instrument_string
		# render text: instruments
		# if params[:user][:confirm_password] == params[:user][:password]
		# 	@user = User.new(user_params)	
		# 	if @user.save
	 #  			sign_in(@user)
	 #  			redirect_to user_path(@user[:id])
	 #  		else
	 #  			redirect_to new_user_path, flash[:notice] = @user.errors.full_messages
	 #  		end
		# else	
		# 	flash[:notice] = Array.new()
		# 	flash[:notice].push('Passwords Did Not Match')
		# 	redirect_to new_user_path
		# end
		
  		
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
	