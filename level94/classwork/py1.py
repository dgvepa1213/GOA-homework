def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]
print(open_or_senior([(60, 10), (30, -2), (55, 8), (50, 12)]))