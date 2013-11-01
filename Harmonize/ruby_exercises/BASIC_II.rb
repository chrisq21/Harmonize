#PART ONE
array = [3,5,1,2,7,9,8,13,25,32]

sum = 0
array.each { |a| sum += a }
puts "Sum of array #{sum}"

array = array.reject! { |x| x < 10 }
puts "#{array}"

#PART TWO
names = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
puts names.shuffle

n = names.reject! { |y| y.length > 5 }
puts "#{n} are the names of the people with less than 5 characters"

#PART THREE
abc = [*('a'...'z')]
shuff = abc.shuffle
first = shuff.shift
last = shuff.pop

puts "The first character in the array is #{first}"
if first == "a" 
	puts "VOWEL DETECTED!!!"
elsif first == "e" 
	puts "VOWEL DETECTED!!!"
elsif first == "i" 
	puts "VOWEL DETECTED!!!"
elsif first == "o" 
	puts "VOWEL DETECTED!!!"
elsif first == "u" 
	puts "VOWEL DETECTED!!!"

end
puts "The last character in the array is #{last}"

#PART FOUR
gen_ten = 10.times.map{rand(55..100)}
puts "#{gen_ten}"

gen = gen_ten.sort
puts "#{gen}"
puts "Minimum value is #{gen.shift}, Maximun value is #{gen.pop}"

#PART FIVE
puts (1..5).map{(65 + rand(26)).chr}.join

#PART SIX
six =  10.times.map{(1..5).map{(65 + rand(26)).chr}.join}
puts "#{six}"
