// decotrator design pattern

class User {
    constructor(name) {
        this.name = name
    }
    introduceMe() {
        return `my name is ${this.name}`
    }
}

// decorated 

class DecoratedUser {
    constructor(user, age, job) {
        this.user = user
        this.name = user.name; // the extracted property/ field from the instance (it's like inheritance)
        this.age = age;
        this.job = job;
    }

    introduceMe() {
        return `my name is ${this.name}, age => ${this.age}, job => ${this.job}`
    }
}

// here is the trick you can use the main class (user) with the decorated class (decorated class)
// to make the main class have more futures thanks to decorated User

// basic introduce
const user = new User('hamada');
console.log(user.introduceMe())


// the featured one 
const decoratedUser = new DecoratedUser(user, '22', 'software devloper')

console.log(decoratedUser.introduceMe())
