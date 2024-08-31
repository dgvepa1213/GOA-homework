def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        if num2 == 0:
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია"
        else:
            return num1 / num2
    else:
        return "შეცდომა: გაურკვეველი ოპერაცია"

# ფუნქციის გამოძახება და შედეგების დაბეჭდვა
print(simple_calculator(10, 5, "დამატება"))    # Output: 15
print(simple_calculator(10, 5, "გამოკლება"))  # Output: 5
print(simple_calculator(10, 5, "გამრავლება")) # Output: 50
print(simple_calculator(10, 5, "გაყოფა"))     # Output: 2.0
print(simple_calculator(10, 0, "გაყოფა"))     # Output: შეცდომა: ნულზე გაყოფა შეუძლებელია