class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} is ${this.age} years old!`;
    }
}

console.log("Log from person class...");

export default Person;
