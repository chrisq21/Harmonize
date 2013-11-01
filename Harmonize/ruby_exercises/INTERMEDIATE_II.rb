class Fixnum

	def double
		self * 2
	end

	def prev
		self - 1
	end

	def skip
		self + 2
	end

end #end if class

puts 43.next

puts 2.double, 4.double, 4.double.double

puts 6.prev

puts 9.skip

class String

	def reverse_og
		string = ""
		(self.length - 1).downto(0) do |x|
			string << self[x]
		end
		string
	end

end #end of class

str = "Meow mix"

puts str.reverse_og

class Array

	def iterate
		array = Array.new
		self.each do |x|
			array << yield(x)
		end
		array
	end

	def iterate!
		length.time do |x|
			self[x] = yield(self[x])
		end
		self
	end

end #end of class

puts [1,2,3,4,5].iterate{ |i| i * 2 }.inspect
