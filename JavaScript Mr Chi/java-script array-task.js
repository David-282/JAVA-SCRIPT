
let testScores = [78,98,76,56,25,60,61,40,81,55]

function getPassStudent (array){
    return array.filter((number) => (number >= 70))
}

console.log(getPassStudent(testScores))


let examGrades = [85,92,78,88,95]

function increaseGrades (numbers){
let = result = numbers.map((number)=> (number + 5));
return result
}

console.log(increaseGrades(examGrades))


let integers = [2,4,8,10]

function findSquares (numbers){
    let result = numbers.map((number) => (number*number))
    return result
}

console.log(findSquares(integers))


let members = ["Emily","Jack","Sophia","Daniel"]

function addBooks (members){
let books = ["book of life","Cinderella Story","How to catch the fish yourself","Battling Corruption"]

let membersList = []

for (let count = 0; count < members.length; count++) {
    membersList.push(members[count] + " - " + books[count])
}

return membersList;
}

console.log(addBooks(members))


let classList = ["9:00 Am","11:00 Am","1:00 Pm","3:00 Pm","5:00 Pm"]

function identifyClasses (classList){
    return classList.filter((time) => (time.includes("Pm")))
}


console.log(identifyClasses(classList))

const expenses = {  "groceries": 150, 
                    "dining out": 100, 
                    "transportation": 50, 
                    "entertainment": 80
                 }

function calculateExpenses(expenses){
    let totalExpenses  =0
    for (let values in expenses){
        totalExpenses += expenses[values]
    
    }
    return totalExpenses
}


console.log(calculateExpenses(expenses))

const studentScores = [95, 78, 85, 60, 45, 92];

function convertScores (scores){
    let result = scores.map((score) => ((score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F"))
    return result
}

console.log(convertScores(studentScores))


const shoppingList = [
    { name: 'Apples', category: 'Fruits', isHealthy: true },
    { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
    { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
    { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
    { name: 'Soda', category: 'Beverages', isHealthy: false }
]

function filterHealthyItems (shoppingList){
    let healthyItems = shoppingList.filter((item) => item.isHealthy)
    console.log(healthyItems)
    
    healthyItems.forEach((item) => console.log(item.name))
}

filterHealthyItems(shoppingList)



const products = [ 
		{ name: "Laptop", price: 1200 }, 
		{ name: "Phone", price: 600 },
	 	{ name: "Mouse", price: 25 }, 
		{ name: "Monitor", price: 200 } 
	      ];

    function pricedGoods(productArray){
        let pricedProducts = productArray.filter((product) =>(product.price >50))
        
        pricedProducts.forEach( (product) => product.discountedPrice= product.price- (product.price*0.1))
        return pricedProducts
    }

    console.log(pricedGoods(products))


const orders = [
  { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
  { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
  { id: 3, items: [{ price: 30, quantity: 1 }] },
];

// function orderOver100 (customerOrders){
//     total =[]
//     for (let count =0; count < customerOrders.length; count++){
//         total.push(0)
//     }

//     for (let order in customerOrders){
//         total[order] += order.items[]
//     }
// }
console.log(orderOver100(orders))