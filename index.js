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
    console.log(`${user.name}: ${user.score}`);
}

// const userFunctionStore = {
//     increment: function() {
//         this.score++
//     },
//     login: function() {
//         console.log("You're loggedin");
//     }
// }

// function userCreator(name, score) {
//     const newUser = Object.create(userFunctionStore);
//     console.log(newUser)
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// }

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// printStats(user1);
// printStats(user2);
// user1.increment()
// printStats(user1);

// function multiplyBy2(num) {
//     return num*2
// }
//
// multiplyBy2.stored = 5
// console.log(multiplyBy2(3))
//
// console.log(multiplyBy2.stored)
// console.log(multiplyBy2.prototype)

function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function() {
    const add1 = () => {
        this.score++;
    }
    add1();
}

UserCreator.prototype.login = function() {
    console.log("login")
}

const user1 = new UserCreator("Eva", 9)
printStats(user1);
user1.increment();
printStats(user1);