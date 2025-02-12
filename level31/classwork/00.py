movies = ["Inception", "Interstellar", "The Matrix", "Fight Club"]

# ყველა მნიშვნელობის ჩანაცვლება
movies = ["New Movie 1", "New Movie 2", "New Movie 3", "New Movie 4"]

print(movies)


#################################################################



numbers = [10, 20, 30, 40, 50]

# ინდექსების გამოყენებით შეკრება
sum_of_numbers = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]

print("რიცხვების ჯამი:", sum_of_numbers)
















######################################################################################################





big_numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

index = int(input("შეიყვანეთ ინდექსი (0-დან 9-მდე): "))

if 0 <= index < len(big_numbers):
    print("ლისტის ელემენტი ინდექსზე", index, "არის:", big_numbers[index])
else:
    print("არასწორი ინდექსი!")
################################################







name_surname = ["გიორგი", "მარგველაშვილი"]

# ინდექსების გამოყენებით ბეჭდვა
print(name_surname[0], name_surname[1])
