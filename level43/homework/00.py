#1


def area(x, y):
    return x * y  # Multiply width by height

w = int(input())  # Read the width input
h = int(input())  # Read the height input

print(area(w, h))  # Call the function and print the result


#2


def print_numbers():
  print(1) 
  print(2)
  return
  print(4)
  print(6) 


  #4

  def count_items(item_list, item):
    return item_list.count(item)

# მაგალითი გამოყენება:
items = [1, 2, 3, 4, 2, 2, 5]
print("count_item"(items, 2))  # შედეგი: 3

#5

def sum_of_list(num_list):
    total = 0  # ვქმნით ცვლადს, რომელიც შეინახავს ჯამს
    for num in num_list:  # ვმიმართავთ სიას თითოეული ელემენტისთვის
        total += num  # თითოეული ელემენტი ემატება ჯამს
    return total  # ვაბრუნებთ საერთო ჯამს

# მაგალითი გამოყენება:
numbers = [1, 2, 3, 4, 5]
print(sum_of_list(numbers))  # შედეგი: 15


#6


def average_of_list(num_list):
    if len(num_list) == 0:  
        return 0 
    total = 0  
    for num in num_list:  
        total += num 
    return total / len(num_list)  
# მაგალითი გამოყენება:
numbers = [1, 2, 3, 4, 5]
print(average_of_list(numbers))


#7


def reverse_list(items):
    reversed_list = []  # ვქმნით ცარიელ სიას
    for item in items:  # ვმიმართავთ თითოეულ ელემენტს `items`-ში
        reversed_list.insert(0, item)  # ელემენტს ვამატებთ ახალ სიის დასაწყისში
    return reversed_list

# მაგალითი გამოყენება:
items = [1, 2, 3, 4, 5]
print(reverse_list(items))  # შედეგი: [5, 4, 3, 2, 1]



