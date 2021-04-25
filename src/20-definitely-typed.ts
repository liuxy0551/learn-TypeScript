/**
 * 泛型
 * 定义函数、接口、类的时候没有指定具体的类型，使用的时候再指定具体的类型
 */

export {} // 确保和其他示例没有成员冲突

function createNumberArray (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createStrinfArray (length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

const arrayRes = createNumberArray(3, 100) // [100, 100, 100]
const stringRes = createStrinfArray(3, 'foo') // ['foo', 'foo', 'foo']

function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}
const numRes = createArray<number>(3, 100)
const strRes = createArray<string>(3, 'foo')
