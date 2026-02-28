const {finalValidation, sumOfEevAndOddIndex,sumOfEvenIndex,sumOfOddIndex,cardType,userInputToArray} = require("./creditCardValidator")

//  test("for even numbers", ()=>{
//     let numbers = [2,3,4,5,6,8]  // assert
//     let evenNumbers = getEvenNumbers(numbers)      
//     expect(evenNumbers).toEqual([2,4,6,8])
//  })

    test ("test userinput turns to an array", ()=>{
        let number = 1234567890123456
        let cardArr = userInputToArray(number)
        expect(cardArr).toEqual([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6])
    })

    test ("test for card type", ()=>{
        let number = [4,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
        let card = cardType(number)
        expect(card).toBe("Visa Card")
    })

     test ("test for card type", ()=>{
        let number = [5,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
        let card = cardType(number)
        expect(card).toBe("MasterCard")
    })

      test ("test for card type", ()=>{
        let number = [6,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
        let card = cardType(number)
        expect(card).toBe("Discover Card")
    })

         test ("test for card type", ()=>{
        let number = [3,7,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
        let card = cardType(number)
        expect(card).toBe("American Express Card")
    })

       test ("test for card type", ()=>{
        let number = [0,7,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
        let card = cardType(number)
        expect(card).toBe("Invalid Card")
    })

    test ("test for sum of odd index", ()=>{
        let number = [4,3,8,8,5,7,6,0,1,8,4,0,2,6,2,6]
        let sum = sumOfOddIndex(number)
        expect(sum).toBe(38)
    })

    test ("test for sum of even index", ()=>{
        let number = [4,3,8,8,5,7,6,0,1,8,4,0,2,6,2,6]
        let sum = sumOfEvenIndex(number)
        expect(sum).toBe(37)
    })

    test ("test for sum of even and odd index", ()=>{
        let number = [4,3,8,8,5,7,6,0,1,8,4,0,2,6,2,6]
        let sum = sumOfEevAndOddIndex(number)
        expect(sum).toBe(75)
    })

        test ("test for final validation", ()=>{
            let number = [4,3,8,8,5,7,6,0,1,8,4,1,0,7,0,7]
            let validation = finalValidation(number)
            expect(validation).toBe("Valid")
        })

    test("returns Invalid for a card number that is too long", () => {
        const card = userInputToArray("41111111111111111");
        expect(finalValidation(card)).toBe("Invalid");
    });


    test("returns Invalid for a card number that is too short", () => {
        const card = userInputToArray("411111");
        expect(finalValidation(card)).toBe("Invalid");
    });