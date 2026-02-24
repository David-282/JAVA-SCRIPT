// npm init -y
// npm install --save-dev jest
// 


function getEvenNumbers(array){
    let newArray = [];

    for(let number of array){
        if(number %2 === 0){
            newArray.push(number)
        } 
}
    return newArray;
}

function getOddNumbers(array){
    let newArray = [];

    for(let number of array){
        if(number %2 !== 0){
            newArray.push(number)
        } 
}
    return newArray;
}

module.exports = {getEvenNumbers, getOddNumbers}