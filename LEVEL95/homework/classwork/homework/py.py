######
def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]

###########

import math

def find_next_square(sq):
    # Check if sq is a perfect square
    if math.isqrt(sq) ** 2 == sq:
        # Return the next perfect square
        return (math.isqrt(sq) + 1) ** 2
    return -1
#############

def row_sum_odd_numbers(n):
    return n ** 3
#############

def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 += int(p0 * (percent / 100)) + aug
        years += 1
    return years

################
def printer_error(s):
    errors = sum(1 for char in s if char < 'a' or char > 'm')
    return f"{errors}/{len(s)}"
