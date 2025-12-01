number = int(input("Enter a number: "))
digits = number
count = 1
sum = 0
productFactorial = 1

while digits != 0:

    SeperatingNumbers = digits % 10
    for index in range(1, SeperatingNumbers + 1):
        productFactorial *= index

    sum += productFactorial
    digits = digits // 10
    productFactorial = 1

    count += 1

if number == sum:
    print("The number is a strong number")
else:
    print("The number is not a stong number")

