"use strict";
/**
 * 泛型
 * 定义函数、接口、类的时候没有指定具体的类型，使用的时候再指定具体的类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createNumberArray(length, value) {
    const arr = Array(length).fill(value);
    return arr;
}
function createStrinfArray(length, value) {
    const arr = Array(length).fill(value);
    return arr;
}
const arrayRes = createNumberArray(3, 100); // [100, 100, 100]
const stringRes = createStrinfArray(3, 'foo'); // ['foo', 'foo', 'foo']
function createArray(length, value) {
    const arr = Array(length).fill(value);
    return arr;
}
const numRes = createArray(3, 100);
const strRes = createArray(3, 'foo');
