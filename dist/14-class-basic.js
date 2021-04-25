"use strict";
/**
 * 类（Class）
 * 用来描述一类具体对象的抽象成员
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(msg) {
        console.log(`I am ${this.name}, ${msg}`);
    }
}
