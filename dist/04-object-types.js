"use strict";
/**
 * Object 类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
// object 并不单指对象，而是除了原始类型以外的其他类型
// foo 可以接收函数、数组、对象 function () {} 、[]、{}，不接收原始值
const foo = {};
// 对象类型的限制，专业的是使用 interface
const pbj = { foo: 123, bar: 'string' };
