"use strict";
/**
 * 类的只读属性
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    sayHi(msg) {
        // tom.gender = false
        console.log(`I am ${this.name}, ${msg}`);
    }
}
const tom = new Person('Tom', 18);
console.log(tom.name);
// tom.gender = false
