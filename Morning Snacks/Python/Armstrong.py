number = int(input("Enter a number: "))
digits = number
sumOfCube = 0
numberLength = len(str(number))

while digits != 0:
    seperateDigits = digits % 10
    cube = seperateDigits ** numberLength
    sumOfCube += cube
    digits = digits // 10

if sumOfCube == number:
    print("The number is an Armstrong number")
else:
    print("The number is not an Armstrong number")

