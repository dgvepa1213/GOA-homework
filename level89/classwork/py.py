def find_multiples(integer, limit):
    return [i for i in range(integer, limit + 1, integer)]

print(find_multiples(2, 6))  # Output: [2, 4, 6]
print(find_multiples(2, 5))  # Output: [2, 4]
print(find_multiples(3, 10)) # Output: [3, 6, 9]