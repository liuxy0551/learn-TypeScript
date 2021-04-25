"use strict";
/**
 * 类的访问修饰符
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    sayHi(msg) {
        console.log(`I am ${this.name}, ${msg}`);
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name, age);
        console.log(this.gender);
    }
    static create(name, age) {
        return new Student(name, age);
    }
}
const tom = new Person('Tom', 18);
console.log(tom.name);
// console.log(tom.age)
// console.log(tom.gender)
// const jack = new Student()
const jack = Student.create('Jack', 20);
