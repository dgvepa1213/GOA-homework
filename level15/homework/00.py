print(True and True)
print(False and True)
print(False and False)
print(True or True)
print(True or False)
print(False or False)
print(5>3 or 8>2)
print(10>=10 and 4<4)
print(15<2 or 2>15)
print(7>1 and 9<12)






steps = int(input("შეიყვანეთ გადადგმული ნაბიჯების რაოდენობა: "))

time_minutes = int(input("შეიყვანეთ დრო წუთებში: "))


result = steps >= 1000 and time_minutes <= 10


print(result)




steps = 1500
time_minutes = 9
result = steps >= 1000 and time_minutes <= 10
print(result)  # True, because both conditions are True: steps >= 1000 (1500 >= 1000) and time_minutes <= 10 (9 <= 10)


steps = 900
time_minutes = 11
result = steps >= 1000 or time_minutes <= 10
print(result)  # False, because both conditions are False: steps >= 1000 (900 < 1000) and time_minutes <= 10 (11 > 10)