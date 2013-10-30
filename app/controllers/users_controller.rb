class UsersController < ApplicationController
	before_action :signed_in_user, only: [:edit, :update, :destroy]

	def index
		# render text: params
		@all_users = User.all
		@users = Array.new

		if params[:search]
			@genre = params[:search][:genre]
			@instrument = params[:search][:instrument]
			if @genre == 'Any Genre' && @instrument == 'All Musicians'
				@users = @all_users
			elsif @instrument == 'All Musicians'
				# # Get All Instruments by specific genre
				@all_users.each do |user|
					user.genres.each do |g|
						if g.genre == params[:search][:genre]
							# puts user.first_name + ' has ' + params[:search][:instrument] 
							@users.push(user)
						end
					end	
				end	
			elsif @genre == 'Any Genre'
				# Get All Genres by specific Instrument
				@all_users.each do |user|
					user.instruments.each do |i|
						if i.instrument == params[:search][:instrument]
							puts user.first_name + ' has ' + params[:search][:instrument] 
							# render text: 'hello'
							@users.push(user)
						end	
					end	
				end		
			else 
				@all_users.each do |user|
					user.genres.each do |g|
						if g.genre == params[:search][:genre] 
							user.instruments.each do |i|
								if i.instrument == params[:search][:instrument]
									@users.push(user)
								end	
							end	
						end
					end	
				end		
			end	
		else
			@instrument = 'All Musicians'
			@genre = 'Any Genre'
			@users = User.all
		end	
	end

	def update_search
		render text: params
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
				seeking.save
				seeking_instruments = Array.new(params[:seeking])
				seeking_instruments.each do |s|
					seeking.instruments.new(instrument: s).save
				end	
				
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
		# render text: params[:experience].values_at('Piano')
		name = params[:user][:name].split(' ')
		first_name = name[0]
		last_name = name[1]
		@user = User.find(params[:id])
		@user[:first_name] = first_name
		@user[:last_name] = last_name
	    @user[:email] = params[:user][:email]
	    @user[:age] = params[:user][:age]
	    @user[:bio] = params[:user][:bio]
	    @user[:city] = params[:user][:city]
	    @user[:inband] = params[:user][:inband]
	   	@user[:current_band] = params[:user][:current_band]
	    
	    if @user.save
	    	if params[:experience]
	    		params[:experience].keys.each do |key|
	    			params[:experience].values_at(key).each do |value|
	    				value.each do |v|
	    					e = @user.instruments.find_by(instrument: key).experiences.new(description: v)
	    					e.save
	    				end	
	    			end	
	    		end	
	    	end	
	    	if params[:instruments]
	    		instruments = Array.new(params[:instruments])
				instruments.each do |i|
					new_instrument = @user.instruments.new(instrument: i)
					new_instrument.save
				end
	    	end	
	    	if params[:seeking]
	    		if Seeking.find_by(user_id: @user.id)
	    			seeking = Seeking.find_by(user_id: @user.id)
	    		else 
	    			seeking = Seeking.new(user_id: @user.id)
	    		end 
				seeking_instruments = Array.new(params[:seeking])
				seeking_instruments.each do |s|
					seeking.instruments.new(instrument: s).save
				end	
				seeking.save
			end	
	    	if params[:genre]
	    		genres = Array.new(params[:genre])
				genres.each do |g|
					new_genre = @user.genres.new(genre: g)
					new_genre.save
				end
	    	end	
	      redirect_to @user
	    else 
	     	render text: 'Failed To Update User'
	    end  
	end

	def signed_in_user
    redirect_to login_path, notice: "Please sign in." unless signed_in? 
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :age, :city, :bio, :inband)
  end
end
	