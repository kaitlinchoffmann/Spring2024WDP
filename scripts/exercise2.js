/*
Create an array of about 8 numbers. Make a couple divisible by 3: [4,  3,  25,  21,  45, 7, 20];
Print the array.
Go through the array and count how many numbers are divisible by 3.
Then, remove that number from the array. —> splice
Display the array and count.
*/
let random = [3, 10, 9, 14, 9, 21, 7]
//            0   1  2   3  4  5   6
// console.log(random)

let count = 0
for(let i = 0; i<random.length; i++) {
  if(random[i] % 3 == 0) {
    count++
    random.splice(i, 1)
    i--
  }
}

// console.log(random)
// console.log(`Number of values divisible by 3 is ${count}!!`)

let findSum = (i1, i2, i3) => i1 + i2 + i3;

let findAverage = (i1, i2, i3) => findSum(i1, i2, i3) / 3

let sum = findSum(5, 2, 1)
let avg = findAverage(5, 2, 1)

// console.log(`Sum is ${sum}, Average is ${avg.toFixed(2)}`)

// console.log(`Sum is ${findSum(5, 2, 1)}, Average is ${findAverage(5, 2, 1).toFixed(2)}`)

function User(userName, id, email) {
  this.userName = userName
  this.userId = id
  this.email = email
}

let user2 = new User("alice")
console.log(user2)

User.prototype.printInfo = function() {
  console.log(`Username: ${this.userName}, Email: ${this.email}`)
}

let user1 = new User("bobby", 12345, "b@fakemail.com")
user1.printInfo()


console.log(user1)

user1.userName = "bobbyiscool"

console.log(user1.userName)

user1.age = 25
console.log(user1)