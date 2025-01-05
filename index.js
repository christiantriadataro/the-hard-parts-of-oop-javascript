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
function printStats(user) {
    console.log(":::::::::::Print Stats:::::::")
    console.log(`${user.name}: ${user.score}`);
    console.log(`balance: ${user.accountBalance}`)
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
// function userCreator(name, score) {
//     const newUser = Object.create(userFunctions)
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// }
//
// const userFunctions = {
//     sayName: function() {
//         console.log(`I'm ${this.name}`)
//     },
//     increment: function() {
//         this.score++
//     }
// }
//
// const user1 = userCreator("Phil", 5)
// user1.sayName()
// printStats(user1)
//
// function paidUserCreator(paidName, paidScore, accountBalance) {
//     const newPaidUser = userCreator(paidName, paidScore);
//     newPaidUser.sayName()
//     Object.setPrototypeOf(newPaidUser, paidUserFunctions);
//     newPaidUser.printStats()
//     newPaidUser.accountBalance = accountBalance;
//     newPaidUser.printStats()
//     return newPaidUser;
// }
//
// const paidUserFunctions = {
//     increaseBalance: function() {
//         this.accountBalance++;
//     },
//     printStats
// }
//
// Object.setPrototypeOf(paidUserFunctions, userFunctions)
//
// const paidUser1 = paidUserCreator("Alyssa", 8, 25);
// printStats(paidUser1);
// paidUser1.increaseBalance()
// paidUser1.sayName()
// printStats(paidUser1);

// Solution 2: Constructor (Pseudoclassical) approach
// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }
// UserCreator.prototype.sayName = function() {
//     console.log(`I'm ${this.name}`)
// }
// UserCreator.prototype.increment = function() {
//     this.score++;
// }
//
// const user1 = new UserCreator("Phil", 5)
// printStats(user1);
// const user2 = new UserCreator("Tim", 4)
// printStats(user2);
// user1.sayName()
//
// function PaidUserCreator(paidName, paidScore, accountBalance) {
//     // UserCreator.call(this, paidName, paidScore);
//     UserCreator.apply(this, [paidName, paidScore])
//     this.accountBalance = accountBalance;
// }
//
// PaidUserCreator.prototype = Object.create(UserCreator.prototype)
// PaidUserCreator.prototype.increaseBalance = function() {
//     this.accountBalance++;
// }
//
// const paidUser1 = new PaidUserCreator("Alyssa", 8, 25);
// printStats(paidUser1);
// paidUser1.increaseBalance()
// printStats(paidUser1);
// paidUser1.sayName()

// Solution 3: ES2015 Class Approach
// class userCreator {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     sayName() {
//         console.log(`I'm ${this.name}`)
//     }
//     increment() {
//         this.score++
//     }
// }
//
// const user1 = new userCreator("Phil", 4);
// user1.sayName();
// const user2 = new userCreator("Tim", 4);
//
// class paidUserCreator extends userCreator {
//     constructor(paidName, paidScore, accountBalance) {
//         super(paidName, paidScore);
//         this.accountBalance = accountBalance;
//     }
//     increaseBalance() {
//         this.accountBalance++;
//     }
// }
//
// const paidUser1 = new paidUserCreator("Alyssa", 8, 25);
// paidUser1.increaseBalance()
// paidUser1.sayName();


// const obj = {
//     num: 3,
//     increment: function() {
//         this.num++
//     }
// }
//
// const otherObj = {
//     num: 10
// }
//
// console.log("obj: " + obj.num)
// obj.increment()
// console.log("obj: " + obj.num)
//
// console.log("otherObj: " + otherObj.num)
// obj.increment.call(otherObj)
// console.log("otherObj: " + otherObj.num)

// function userCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }
//
// userCreator.prototype.sayName = function() {
//     console.log(`I'm ${this.name}`)
// }
//
// userCreator.prototype.increment = function() {
//     this.score++;
// }
//
// const user1 = new userCreator("Phil", 5);
// const user2 = new userCreator("Tim", 4);
// user1.sayName()

class userCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    sayName() {
        console.log(`I am ${this.name}`)
    }
    increment() {
        this.score++;
    }
}

const user1 = new userCreator("Phil", 4);
const user2 = new userCreator("Tim", 5);
user1.sayName()

class paidUserCreator extends userCreator {
    constructor(paidName, paidScore, accountBalance) {
        super(paidName, paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance() {
        this.accountBalance++;
    }
}

const paidUser1 = new paidUserCreator("Alysssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName()