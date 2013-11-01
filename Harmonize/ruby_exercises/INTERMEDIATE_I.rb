class MonsterFight

	def initialize
		@monster1 = {:name => "Monster1", :health => 500 }
		@monster2 = {:name => "Monster2", :health => 500 }
	end

	def fight
		for i in 1..5
			puts "Round #{i}!"
			damage1 = rand(1..100)
			damage2 = rand(1..100)
			puts "%s attacks %s with %s damage" % [@monster1[:name], @monster2[:name], damage2]
			@monster2[:health] -= damage2
			puts "#{@monster2[:name]}'s health is now #{@monster2[:health]}/500"
			puts "%s attacks %s with %s damage" % [@monster2[:name], @monster1[:name], damage1]
			@monster1[:health] -= damage1
			puts "#{@monster1[:name]}'s health is now #{@monster1[:health]}/500"
		end

		puts "#{@monster1[:name]} won the fight!!!" if @monster1[:health] > @monster2[:health]
		puts "#{@monster2[:name]} won the fight!!!" if @monster2[:health] > @monster1[:health]
	end

end #end of class

start = MonsterFight.new

start.fight