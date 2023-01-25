const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        age: 30,
        city: 'New York',
        state: 'NY'
    },
    {
        id: 2,
        name: 'Jane',
        email: 'jane@example.com',
        age: 25,
        city: 'Chicago',
        state: 'IL'
    },
    {
        id: 3,
        name: 'Bob',
        email: 'bob@example.com',
        age: 35,
        city: 'New York',
        state: 'NY'
    }
];


function getUsersInState(users, state) {
    let sortedUsers = [], averageAge = 0, standarddeviation = 0;
    for (let i = 0; i < users.length && users.length < 10000; i++) {

        if (state.length >= 2 && typeof state === typeof "" && users[i].state === state) {
            sortedUsers.push(users[i])
            averageAge += users[i].age
        }

    }
    averageAge = Math.round(averageAge / sortedUsers.length)
    standarddeviation = Math.round(Math.sqrt(sortedUsers.map(user => Math.pow(user.age - averageAge, 2)).reduce((a, b) => a + b) / sortedUsers.length))
    return { sortedUsers, averageAge, standarddeviation }
}
// getUsersInState(users, state)
console.log(getUsersInState(users, 'NY'));