
class UsersController < ApplicationController
	before_action :signed_in_user, only: [:edit, :update, :destroy]

	def index
		# render text: params
		@all_users = User.all
		@users = Array.new
		if params[:search]
			@genre = params[:search][:genre]
			@instrument = params[:search][:instrument]

			@city = params[:search][:city]
			if @city == ''
				if signed_in?
					@city = User.find(session[:user_id]).city
				else
					@city = 'All Cities' 	
				end	
			end	
		else 
			if signed_in?
				@city = User.find(session[:user_id]).city
				@instrument = 'All Musicians'
				@genre = 'Any Genre'	
			else 
				@city = 'All Cities'
				@instrument = 'All Musicians'
				@genre = 'Any Genre'	
			end	
		end			
		
		if @genre == 'Any Genre' && @instrument == 'All Musicians' && @city == 'All Cities'
			@users = @all_users
		elsif @instrument == 'All Musicians' && @city == 'All Cities'
			@all_users.each do |user|
				user.genres.each do |g|
					if g.genre == params[:search][:genre]	
						@users.push(user)
					end
				end	
			end	
		elsif @genre == 'Any Genre' && @city == 'All Cities'
			@all_users.each do |user|
				user.instruments.each do |i|
					if i.instrument == params[:search][:instrument]	
						@users.push(user)
					end	
				end	
			end		
		elsif @instrument == 'All Musicians' && @genre == 'Any Genre'
			# # Get All Instruments by specific genre
			@all_users.each do |user|
				if user.city.downcase == @city.downcase
					@users.push(user)
				end	
			end
		elsif @instrument == 'All Musicians'
			# # Get All Instruments by specific genre
			@all_users.each do |user|
				user.genres.each do |g|
					if g.genre == params[:search][:genre]	
						if user.city.downcase == @city.downcase
							@users.push(user)
						end	
					end
				end	
			end	
		elsif @genre == 'Any Genre'
			# Get Any Genre by specific Instrument
			@all_users.each do |user|
				user.instruments.each do |i|
					if i.instrument == params[:search][:instrument]
						if user.city.downcase == @city.downcase
							@users.push(user)
						end	
					end	
				end	
			end
		else				
			@all_users.each do |user|
				user.genres.each do |g|
					if g.genre == params[:search][:genre] 
						user.instruments.each do |i|
							if i.instrument == params[:search][:instrument]
								if user.city.downcase == @city.downcase
									@users.push(user)
								end	
							end	
						end	
					end
				end	
			end		
		end
	end

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def messages
		user = User.find(session[:user_id])
		@messages = user.messages
	end

	def new_message
		message = Message.new
		message.from_id = session[:user_id]
		message.user_id = params[:message_to]
		message.description = params[:description]
		message.save
		redirect_to User.find(params[:message_to])
	end

	def delete_message
		Message.destroy(params[:id])
		redirect_to messages_path
	end

	def create	
		if params[:user][:confirm_password] == params[:user][:password]
			@user = User.new(user_params)	
			@user.zip.to_s.to_region(city: true)
			@user.city = @user.zip.to_s.to_region(city: true)
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
	    	if params[:link]
	    		links = params[:link]
	    		link_count = links[:title].count	
	    		for i in 0...link_count
	    			Link.new(linkable_id: @user.id, linkable_type: 'User', title: links[:title][i], url: links[:url][i]).save
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
    params.require(:user).permit(:first_name, :last_name, :email, :password, :profile_image, :age, :zip, :bio, :inband)
  end
end
	