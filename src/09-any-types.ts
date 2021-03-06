/**
 * 任意类型
 */

 export {} // 确保和其他示例没有成员冲突

 function stringify (value: any) {
   return JSON.stringify(value)
 }

 stringify('string')
 stringify(100)
 stringify(true)

 // -----------------------------

 let foo: any = 'string'
 foo = 100
 foo.bar()

 // any 类型是不安全的
