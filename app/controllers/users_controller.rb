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
		if params[:user][:confirm_password] == params[:user][:password]
			@user = User.new(user_params)	
			if @user.save
				instruments = Array.new(params[:instruments])
				instruments.each do |i|
					new_instrument = @user.instruments.new(instrument: i)
					new_instrument.save
				end	
				genres = Array.new(params[:genres])
				genres.each do |g|
					new_genre = @user.genres.new(genre: g)
					new_genre.save
				end	
				seeking = Seeking.new(user_id: @user.id)
				seeking_instruments = Array.new(params[:seeking])
				seeking_instruments.each do |s|
					seeking.instruments.new(instrument: s).save
				end	
				seeking.save
	  			sign_in(@user)
	  			redirect_to user_path(@user[:id])
	  		else
	  			redirect_to new_user_path, flash[:notice] = @user.errors.full_messages
	  		end
		else	
			flash[:notice] = Array.new()
			flash[:notice].push('Passwords Did Not Match')
			redirect_to new_user_path
		end
	end

	def edit
		
	end

	def update
		render text: params
	end

	def signed_in_user
    redirect_to login_path, notice: "Please sign in." unless signed_in? 
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :age, :city, :bio, :inband)
  end
end
	