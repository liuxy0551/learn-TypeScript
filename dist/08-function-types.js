"use strict";
/**
 * 函数类型
 * 1、函数声明
 * 2、函数表达式
 */
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    return 'func1';
}
func1(100, 200);
// func1(100)
// func1(100, 200, 300)
function func2(a, b) {
    return 'func2';
}
func2(100, 200);
func2(100);
// func2(100, 200, 300)
// 接收任意个参数
function func3(...rest) {
    return 'func3';
}
// -----------------------------------------
const func4 = function (a, b) {
    return 'func4';
};
const func5 = function (a, b) {
    return 'func5';
};
