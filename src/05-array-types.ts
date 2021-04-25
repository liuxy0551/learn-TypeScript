/**
 * 数组类型
 */

const arr1: Array<number> = [1, 2, 3]
const arr2: number[] = [1, 2, 3]

// 求和函数
function sum (...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

sum(1, 2, 3)
