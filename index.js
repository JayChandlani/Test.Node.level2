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
    if (state.length >= 2 && typeof state === typeof "" && users.length < 10000) {
        let averageAge = 0, standarddeviation = 0;
        let sortedUsers = users.filter(user => user.state === state);
        if (sortedUsers === []) {
            averageAge = Math.round(sortedUsers.reduce((a, b) => a.age + b.age) / sortedUsers.length)
            standarddeviation = Math.round(Math.sqrt(sortedUsers.map(user => Math.pow(user.age - averageAge, 2)).reduce((a, b) => a + b) / sortedUsers.length))
            return { sortedUsers, averageAge, standarddeviation }
        } else {
            return `No record found`
        }
    } else if (users.length > 10000) {
        return `error length of the data excided`
    } else if (typeof state !== typeof "") {
        return `type of state must be string`
    } else if (state.length < 2) {
        return `state must be greate than or equal to 2 letters`
    } else {
        return `some error occur`
    }
}
// getUsersInState(users, state)
console.log(getUsersInState(users, 'NY'));