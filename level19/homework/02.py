#5დაწერეთ პროგრამა for loop-ის გამოყენებით, რომელიც გამოგვიტანს ჯერ ლუწს და შემდეგ კენტს.

#თუ გაიაზრებთ მარტივია ძალიან.
 
print("Even numbers:")
for i in range(10):
    if i % 2 == 0:
        print(i)

print("Odd numbers:")
for i in range(10):
    if i % 2 != 0:
        print(i)