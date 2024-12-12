def even_numbers(arr, n):
    evens = [x for x in arr if x % 2 == 0]
    return evens[-n:]