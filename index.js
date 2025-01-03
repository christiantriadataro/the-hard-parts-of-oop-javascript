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

const user1 = {
    name: "Phil",
    score: 4,
    increment: function() {
        user1.score++;
    }
}

user1.increment()
printStats(user1)

const user2 = {}

user2.name = "Julia"
user2.score = 5;
user2.increment = function() {
    user2.score++;
}

printStats(user2)

const user3 = Object.create(null)
user3.name = "Eva"
user3.score = 9;
user3.increment = function() {
    user3.score++;
}

printStats(user3)
