"use strict";
/**
 * 数组类型
 */
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// 求和函数
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3);
