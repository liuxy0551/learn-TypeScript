"use strict";
/**
 * 类与接口
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    eat(food) {
        console.log(`优雅的进食${food}`);
    }
    run(distance) {
        console.log(`直立行走${distance}`);
    }
}
class Animal {
    eat(food) {
        console.log(`大口的进食${food}`);
    }
    run(distance) {
        console.log(`爬行：${distance}`);
    }
}
