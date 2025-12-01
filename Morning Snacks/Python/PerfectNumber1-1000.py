number = 1000
for index in range(1, number + 1):
    sumOfFactors = 0
    for count in range(1, index):
        if index % count == 0:
            sumOfFactors += count

    if sumOfFactors == index:
        print(index)

