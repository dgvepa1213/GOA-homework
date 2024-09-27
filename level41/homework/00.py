
#1
template = "Hello, {name}. Welcome to {place}."

# Use format() to replace {name} and {place}
formatted_string = template.format(name="Alice", place="Wonderland")

print(formatted_string)



#2

# Create the list of words
words = ["apple", "banana", "cherry"]


fruit_string = ", ".join(words)

# Print the resulting string
print(fruit_string)



#3


sentence = "The quick brown fox jumps over the lazy dog."


words_list = sentence.split()

# Print the resulting list of words
print(words_list)


#4


quote = "To be or not to be, that is the question."


modified_quote = quote.replace("be", "code")


print(modified_quote)


#5


mixed_case = "PyThOn Is AwEsOmE!"


lowercase_string = mixed_case.lower()

# Print the lowercase string
print(lowercase_string)


#6

# Create the greeting string
greeting = "good morning"


uppercase_greeting = greeting.upper()


print(uppercase_greeting)





