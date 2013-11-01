def do_it(first_number,second_number)

	operation = rand(4) + 1

	if operation == 1
		x = first_number + second_number
		y = "ADDITION"
		puts "The answer is #{x}, and the operation used is #{y}"

	elsif operation == 2
		x = first_number - second_number
		y = "SUBTRACTION"
		puts "The answer is #{x}, and the operation used is #{y}"

	elsif operation == 3
		x = first_number * second_number
		y = "MULTIPLICATION"
		puts "The answer is #{x}, and the operation used is #{y}"

	elsif operation == 2
		x = first_number / second_number
		y = "DIVISION"
		puts "The answer is #{x}, and the operation used is #{y}"

	end
end

puts "Enter first number"
first_number = gets.chomp.to_i
puts "Enter second number"
second_number = gets.chomp.to_i

puts do_it(first_number, second_number)