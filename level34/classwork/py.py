#შექმენით ფუნქცია, რომელიც გამოიტანს x და y ჯამს, მოახდინეთ ოპერაცია შემდეგ ოპერატორებზე: +, -. *. //
def calculate_operations(x, y):
    addition = x + y
    subtraction = x - y
    multiplication = x * y
    floor_division = x // y
    return addition, subtraction, multiplication, floor_division


x = 10
y = 3
result = calculate_operations(x, y)
print(result)  # (13, 7, 30, 3)


#  შექმენით ფუნქცია, რომელიც მიესალმება მომხმარებელს. ტექსტი: 'გამარჯობა {სახელი}, კეთილი იყოს შენი მობრძანება,  გისურვებ წარმატებას და წინ სვლას"
def greet_user(erekle):
    greeting = f"გამარჯობა {erekle},  გისურვებ წარმატებას წინსვლას ბედნიერებას და სიხარულს ჩემო მეგობარო და გაიღიმე ხშირად.<3 სიყვარულით {"ერეკლე"}"
    return greeting

# მაგალითი გამოყენება
name = "erekle"
print(greet_user("niko"))  # გამარჯობა niko, გისურვებ წარმატებას წინსვლას ბედნიერებას და სიხარულს ჩემო მეგობარო და გაიღიმე ხშირად.<3 სიყვარულით {ერეკლე}


#შექმენით ფუნქცია, რომელიც სიყვარულის წერილს მიუძღვნის მომხმარებელს

def love_letter(name):
    letter = f"ჩემი ძმა ხარ ნიკო ჩემი მარჯვენა ხელი და ის ადამიანი რომელიც ყველაფერში დამეხმარება, სიყვარულით ერეკლე."
    f"სიყვარულით {"ერეკლე"}"
            
  
    return letter

# მაგალითი გამოყენება
name = "ერეკლე"
print(love_letter(name))



















