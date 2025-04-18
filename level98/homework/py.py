########

def count_zeros(n):
    count = 0
    for i in range(1, n+1):
        count += str(i).count('0')
    return count


