def fake_bin(digits):
    result = ''
    for digit in digits:
        if int(digit) < 5:
            result += '0'
        else:
            result += '1'
    return result