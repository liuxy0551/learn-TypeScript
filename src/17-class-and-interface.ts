/**
 * 类与接口
 */

export {} // 确保和其他示例没有成员冲突

interface Eat {
  eat (food: string): void
}

interface Run {
  run (distance: number): void
}

class Person implements Eat, Run {
  eat (food: string): void {
    console.log(`优雅的进食${ food }`)
  }

  run (distance: number) {
    console.log(`直立行走${ distance }`)
  }
}

class Animal implements Eat, Run {
  eat (food: string): void {
    console.log(`大口的进食${ food }`)
  }

  run (distance: number) {
    console.log(`爬行：${ distance }`)
  }
}
