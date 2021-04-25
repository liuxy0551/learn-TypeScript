/**
 * 类型断言
 */

export {} // 确保和其他示例没有成员冲突

// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 118, 116]

const res = nums.find(i => i > 0)
// const square = res * res

const num1 = res as number // 推荐
const num2 = <number>res // JSX 下不能使用 <number>，会与标签符冲突
