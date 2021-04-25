// 枚举类型

export {} // 确保和其他示例没有成员冲突

// 可以不指定值，默认从0开始，后续的值在第一个值的基础上累加
// 如果初始值是字符串枚举，则需要给每一个成员初始化一个字符串值，字符串枚举不常见
const enum PostStatus { // 加上const会在编译后直接把枚举的值赋给status
  Draft = 0,
  Unpublished = 1,
  published = 2
}

const post = {
  title: 'Hello TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  status: PostStatus.Unpublished
}
