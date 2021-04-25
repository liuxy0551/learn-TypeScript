"use strict";
/**
 * 元组类型
 * 元组类型是一种特殊的数据类型，明确元素数量和每个元素类型的数组，各个元素类型不必要完全相同
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tuple = [18, 'Tom'];
// const age = tuple[0]
// const name = tuple[1]
const [age, name] = tuple;
// -------------------------
// Object.entries({
//   foo: 123,
//   bar: 456
// })
