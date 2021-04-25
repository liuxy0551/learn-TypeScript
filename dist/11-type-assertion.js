"use strict";
/**
 * 类型断言
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 118, 116];
const res = nums.find(i => i > 0);
// const square = res * res
const num1 = res; // 推荐
const num2 = res; // JSX 下不能使用 <number>，会与标签符冲突
