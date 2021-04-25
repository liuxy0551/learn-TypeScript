/**
 * 类的只读属性
 */

export {} // 确保和其他示例没有成员冲突

class Person {
  public name: string
  private age: number
  protected readonly gender: boolean // 只允许在子类中访问对应的成员

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    // tom.gender = false
    console.log(`I am ${ this.name }, ${ msg }`)
  }
}

const tom = new Person('Tom', 18)
console.log(tom.name)
// tom.gender = false
