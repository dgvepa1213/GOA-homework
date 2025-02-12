# Creating the list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Printing the entire list
print("Fruits list:", fruits)

# Accessing and printing the first and last items
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])

# Adding a new fruit "fig"
fruits.append("fig")
print("After adding 'fig':", fruits)

# Removing "banana"
fruits.remove("banana")
print("After removing 'banana':", fruits)

# Changing the second item to "blueberry"
fruits[1] = "blueberry"
print("After changing second item to 'blueberry':", fruits)

# Printing the length of the list
print("Length of the list:", len(fruits))


####################################################




# Creating the list
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Appending 100 to the end of the list
numbers.append(100)
print("After appending 100:", numbers)

# Inserting 5 at the beginning of the list
numbers.insert(0, 5)
print("After inserting 5 at the beginning:", numbers)

# Removing 30 from the list
numbers.remove(30)
print("After removing 30:", numbers)

# Sorting the list in ascending order
numbers.sort()
print("After sorting in ascending order:", numbers)

# Reversing the order of the list
numbers.reverse()
print("After reversing the list:", numbers)

# Finding the index of the number 50
index_50 = numbers.index(50)
print("Index of 50:", index_50)

# Counting how many times 20 appears in the list
count_20 = numbers.count(20)
print("Count of 20:", count_20)
