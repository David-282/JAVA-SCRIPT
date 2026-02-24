student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}

console.log(student.name) 
console.log(student.courses[1])
console.log(student.address.zip)


student.age = 23
student.GPA = 3.8
console.log(student.age)
console.log(student.GPA)


function getDetails(student){
 return student.name +" is "+ student.age + " years old and has a GPA of " + student.GPA
}

console.log(getDetails(student))
console.log()

bankAccount = {
    name: "Alice",
    balance: 500
}

function deposit( amount){
    bankAccount.balance += amount
    return bankAccount.balance
}
function withdraw(amount){
    if (amount <= bankAccount.balance) {
        bankAccount.balance -= amount
    } else {
        console.log("Insufficient funds")
    }
}
console.log()

deposit(200)
console.log(bankAccount.balance)

withdraw(1000)
console.log(bankAccount.balance)

console.log()

const inventory = {
   apple: 10,
   banana: 5,
   orange: 8,
   mango: 12
 };

 let totalItems = 0;
 for (let fruit in inventory) {
     totalItems += inventory[fruit];
 }
    console.log("Total fruits in the inventory is ", totalItems);

 for (let fruit in inventory) {
    console.log(fruit);
     }

console.log()

    company = {
        name: "TechCorp",
        location: "San Francisco",
        employees: [
            {id: 0o01, name: "Samuel Sarah", department: "Engineering"},
            {id: 0o02, name: "John Doe", department: "Marketing"},
            {id: 0o03, name: "Folashade Olidi", department: "HR"},
            {id: 0o04, name: "David Johnson", department: "Engineering"}
        ]
    }

    console.log(company.employees[1].name)
    const{name,location} = company
    console.log(name)
    console.log(location)

    for (let employee of company.employees) {
        console.log(employee.name +":  "+ employee.department)
    }
console.log ()


const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Desktop", price: 700 }
];

function findExpensiveProduct(products, threshold) {
    let expensiveProducts = [];
    for (let product of products) {
        if (product.price > threshold) {
            expensiveProducts.push(product.name);
        }
    }
    return expensiveProducts;
}

console.log(findExpensiveProduct(products, 700))