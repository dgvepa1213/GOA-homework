#1

def count_vowels(text):
   
    vowels = "აეიოუუკჰ"
    
    
    count = sum(1 for char in text if char in vowels)
    
    return count


text = "ჩვენს კლასში არის ძალიან მაგარი მასწავლებლები"
print(f"ტექსტში ასობგერების რაოდენობაა: {count_vowels(text)}")



#2
#?



#4

def separate_even_odd(numbers):
    even_numbers = [2,4,6,8,10]  # ლუწი რიცხვების სია
    odd_numbers = [1,3,5,7,9]   # კენტი რიცხვების სია

    for num in numbers:
        if num % 2 == 0:  # თუ რიცხვი ლუწია
            even_numbers.append(num)
        else:  # თუ რიცხვი კენტია
            odd_numbers.append(num)
    
    return even_numbers, odd_numbers

# მაგალითი
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even, odd = separate_even_odd(numbers)
print(f"ლუწი რიცხვები: {even}")
print(f"კენტი რიცხვები: {odd}")



#5

def calculate_average(numbers):
    
    if len(numbers) == 0:
        return 0
    
    
    average = sum(numbers) / len(numbers)
    return average


numbers = [10, 20, 30, 40, 50]
average = calculate_average(numbers)
print(f"რიცხვების სიის საშუალო მნიშვნელობაა: {average}")






