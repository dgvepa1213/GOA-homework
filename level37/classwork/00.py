#class work 2



# Create the list named fruits
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Print the entire list
print("Entire list:", fruits)

# Access and print the first and last items in the list
print("First item:", fruits[0])
print("Last item:", fruits[-1])

# Add a new fruit "fig" to the list
fruits.append("fig")
print("List after adding 'fig':", fruits)

# Remove "banana" from the list
fruits.remove("banana")
print("List after removing 'banana':", fruits)

# Change the value of the second item to "blueberry"
fruits[1] = "blueberry"
print("List after changing the second item to 'blueberry':", fruits)

# Print the length of the list
print("Length of the list:", len(fruits))



#classwork 3


# Create the list named numbers
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use append() to add the number 100 to the end of the list
numbers.append(100)
print("List after appending 100:", numbers)

# Use insert() to add the number 5 at the beginning of the list
numbers.insert(0, 5)
print("List after inserting 5 at the beginning:", numbers)

# Use remove() to remove the number 30 from the list
numbers.remove(30)
print("List after removing 30:", numbers)

# Use sort() to sort the list in ascending order
numbers.sort()
print("List after sorting in ascending order:", numbers)

# Use reverse() to reverse the order of the list
numbers.reverse()
print("List after reversing the order:", numbers)

# Use index() to find the index of the number 50
index_of_50 = numbers.index(50)
print("Index of 50:", index_of_50)

# Use count() to count how many times 20 appears in the list
count_of_20 = numbers.count(20)
print("Count of 20:", count_of_20)



#classwork 4



numbers = list(range(1, 11))


first_half = numbers[:5]


second_half = numbers[5:]
squares = [num ** 2 for num in numbers]

# Step 5: Print the three lists
print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)




#classwork 5



temperatures = [72, 68, 75, 70, 78, 74, 71]


highest_temp = max(temperatures)
print("Highest temperature:", highest_temp)


lowest_temp = min(temperatures)
print("Lowest temperature:", lowest_temp)


average_temp = sum(temperatures) / len(temperatures)
print("Average temperature:", round(average_temp, 2))


above_70 = [temp for temp in temperatures if temp > 70]
print("Temperatures above 70:", above_70)









