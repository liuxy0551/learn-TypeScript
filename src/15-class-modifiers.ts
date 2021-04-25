/**
 * 类的访问修饰符
 */

export {} // 确保和其他示例没有成员冲突

class Person {
  public name: string
  private age: number
  protected gender: boolean // 只允许在子类中访问对应的成员

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(`I am ${ this.name }, ${ msg }`)
  }
}

class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('Tom', 18)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

// const jack = new Student()
const jack = Student.create('Jack', 20)
