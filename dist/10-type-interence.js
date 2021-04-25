"use strict";
/**
 * 隐式类型推断
 */
Object.defineProperty(exports, "__esModule", { value: true });
let age = 18; // number
let foo; // any，动态类型
foo = 100;
foo = 'string';
// 建议为每个变量添加明确的类型，便于后期更直观的理解代码
