/**
 * 函数类型
 * 1、函数声明
 * 2、函数表达式
 */

export {} // 确保和其他示例没有成员冲突

function func1 (a: number, b: number): string {
  return 'func1'
}

func1(100, 200)
// func1(100)
// func1(100, 200, 300)


function func2 (a: number, b?: number): string {
  return 'func2'
}

func2(100, 200)
func2(100)
// func2(100, 200, 300)


// 接收任意个参数
function func3 (...rest: number[]): string {
  return 'func3'
}


// -----------------------------------------

const func4 = function (a: number, b: number): string {
  return 'func4'
}

const func5: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'func5'
}
