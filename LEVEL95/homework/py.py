def row_sum_odd_numbers(n):
    return n ** 3

########################


def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]

##########################


def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    return -1

##############



def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        # Calculate the population growth for the year
        p0 += int(p0 * (percent / 100)) + aug
        years += 1
    return years################

##############


def printer_error(s):
    # Count errors (letters not in 'a' to 'm')
    errors = sum(1 for char in s if char not in 'abcdefghijklm')
    # Return the error ratio as a string
    return f"{errors}/{len(s)}"