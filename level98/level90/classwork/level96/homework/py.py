import math

def find_next_square(sq):
    # Check if sq is a perfect square
    if math.isqrt(sq) ** 2 == sq:
        # Return the next perfect square
        return (math.isqrt(sq) + 1) ** 2
    else:
        # Return -1 if sq is not a perfect square
        return -1
    
    ##########


def nb_year(p0, percent, aug, p):
    years = 0  # Initialize a counter for the number of years
    while p0 < p:  # Loop until the population reaches or exceeds the target
        p0 += p0 * (percent / 100) + aug  # Calculate the new population
        years += 1  # Increment the year counter
    return years  # Return the total number of years


###############

def printer_error(s):
    # Count the number of error characters (not in 'a' to 'm')
    errors = sum(1 for char in s if char not in 'abcdefghijklm')
    # Calculate the error rate as a fraction
    return f"{errors}/{len(s)}"