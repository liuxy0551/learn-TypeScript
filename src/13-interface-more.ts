/**
 * 接口 - 可选成员、只读成员、动态成员
 */

export {} // 确保和其他示例没有成员冲突

interface Post {
  title: string
  content: string
  subtitle?: string
  readonly summary: string
}

const hello: Post = {
  title: 'Hello TypeScript',
  content: 'A JavaScript superset',
  summary: 'A JavaScript'
}

// hello.summary = 'other' // 会报错


// ---------------------------------


interface Cache {
  [key: string]: string
}

const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value1'
