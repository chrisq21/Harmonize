class MathDojo

	def initialize num
		@num = num
	end

	def add * args
		args.flatten!
		@num += args.inject(:+)
		puts @num
		self
	end

	def subtract * args
		args.flatten!
		args.each{ |x| @num -= x }
		puts @num
		self
	end

end #end of class

dojo = MathDojo.new(0)

dojo.add(5).add(6)