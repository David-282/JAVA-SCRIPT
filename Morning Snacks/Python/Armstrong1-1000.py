number = 1000

for count in range(1, number + 1):
    sumOfCube = 0
    digits = count
    numberLenght = len(str(count))
    
    while digits != 0:
        seperateDigits = digits % 10
        cube = seperateDigits ** numberLenght
        sumOfCube += cube
        digits = digits // 10
    
    if sumOfCube == count:
        print(count)

