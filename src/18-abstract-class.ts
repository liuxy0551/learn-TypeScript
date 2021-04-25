/**
 * 抽象类
 * 某个类型添加 abstract 关键词被定义成抽象类后，只能被子类继承，不能使用 new 的方式创建对应的实例对象
 */

export {} // 确保和其他示例没有成员冲突

abstract class Animal {
  eat (food: string): void {
    console.log(`大口的吃：${ food }`)
  }

  abstract run (distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log(`四脚爬行：${ distance }`)
  }
}

// 子类创建的对象会同时拥有父类的实例方法以及自身实现的方法
const d = new Dog()
d.eat('狗粮')
d.run(100)
