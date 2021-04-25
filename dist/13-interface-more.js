"use strict";
/**
 * 接口 - 可选成员、只读成员、动态成员
 */
Object.defineProperty(exports, "__esModule", { value: true });
const hello = {
    title: 'Hello TypeScript',
    content: 'A JavaScript superset',
    summary: 'A JavaScript'
};
const cache = {};
cache.foo = 'value1';
cache.bar = 'value1';
