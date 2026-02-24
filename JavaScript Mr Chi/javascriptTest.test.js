const {getEvenNumbers,getOddNumbers}= require("./testing")

test("add two numbers", ()=>{
    expect(2+3).toBe(5)
})

 test("for even numbers", ()=>{
    let numbers = [2,3,4,5,6,8]  // assert
    let evenNumbers = getEvenNumbers(numbers)      
    expect(evenNumbers).toEqual([2,4,6,8])
 })

 test("for odd numbers", ()=>{
    let numbers = [1,3,5,7,9]  // assert
    let odd = getOddNumbers(numbers)      
    expect(odd).toEqual([1,3,5,7,9])
 })

// Arrange
// Act
// Assert