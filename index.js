/*
 * functionality of hte user object
 * - ability to increase score
 * - ability to decrease score
 * - delete user
 * - log in user
 * - log out user
 * - add avatar
 * - get user score
 * - and more
 */
function printStats() {
    console.log(`${this.name}: ${this.score}`);
    console.log(`balance: ${this.accountBalance}`)
}

// Solution 3
// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }
//
// UserCreator.prototype.increment = function() {
//     const add1 = () => {
//         this.score++;
//     }
//     add1();
// }
//
// UserCreator.prototype.login = function() {
//     console.log("login")
// }
//
// const user1 = new UserCreator("Eva", 9)
// printStats(user1);
// user1.increment();
// printStats(user1);

// Solution 4
// class UserCreator {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     increment() {
//         this.score++;
//     }
//     login() {
//         console.log("login")
//     }
// }
//
// const user1 = new UserCreator("Eva", 9);
// printStats(user1);
// user1.increment()
// printStats(user1);
//
// const obj = {
//     num: 3
// }
//
// console.log(obj.num);
// console.log(obj.hasOwnProperty("num"))
// console.log(Object.prototype)
// console.log(obj.__proto__)

// function multiplyBy2(num) {
//     return num * 2
// }
//
// console.log(multiplyBy2.toString())
// console.log(Function.prototype)
// console.log(multiplyBy2.hasOwnProperty("score"))
// console.log(Function.prototype.__proto__)
// console.log(Function.__proto__)

// Solution 1:Factory function approach
function userCreator(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctions = {
    sayName: function() {
        console.log(`I'm ${this.name}`)
    },
    increment: function() {
        this.score++
    }
}

const user1 = userCreator("Phil", 5)
user1.sayName()
printStats(user1)

function paidUserCreator(paidName, paidScore, accountBalance) {
    const newPaidUser = userCreator(paidName, paidScore);
    newPaidUser.sayName()
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    newPaidUser.printStats()
    newPaidUser.accountBalance = accountBalance;
    newPaidUser.printStats()
    return newPaidUser;
}

const paidUserFunctions = {
    increaseBalance: function() {
        this.accountBalance++;
    },
    printStats
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser1 = paidUserCreator("Alyssa", 8, 25);
printStats(paidUser1);
paidUser1.increaseBalance()
paidUser1.sayName()
printStats(paidUser1);
