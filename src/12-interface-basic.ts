/**
 * 接口
 * 用来约束对象的结构，一个对象去实现一个接口就必须要拥有这个接口中所约束的所有成员
 */

export {} // 确保和其他示例没有成员冲突

interface Post {
  title: string
  content: string
}

function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

printPost({
  title: 'Hello TypeScript',
  content: 'A JavaScript superset'
})
