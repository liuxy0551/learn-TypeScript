/**
 * 类（Class）
 * 用来描述一类具体对象的抽象成员
 */


export {} // 确保和其他示例没有成员冲突

class Person {
  name: string
  age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHi (msg: string): void {
    console.log(`I am ${ this.name }, ${ msg }`)
  }
}
