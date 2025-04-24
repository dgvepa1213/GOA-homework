########

def count_zeros(n):
    count = 0
    for i in range(1, n+1):
        count += str(i).count('0')
    return count



####

def battle(x, y):
    x_power = sum(ord(char) - ord('A') + 1 for char in x)  # Calculate total power for group x
    y_power = sum(ord(char) - ord('A') + 1 for char in y)  # Calculate total power for group y
    
    if x_power > y_power:
        return x  # Group x wins
    elif y_power > x_power:
        return y  # Group y wins
    else:
        return "Tie"  # It's a tie!
    
#######







