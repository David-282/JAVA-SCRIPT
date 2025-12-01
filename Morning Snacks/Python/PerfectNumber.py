integer = int(input("Enter a number: "))
sumOfFactors = 0

for count in range(1, integer + 1):
    if integer % count == 0 and count < integer:
        sumOfFactors += count

if sumOfFactors == integer:
    print("The number is perfect number")
else:
    print("The number is not a perfect number")

