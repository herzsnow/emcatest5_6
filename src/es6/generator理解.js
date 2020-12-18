// generator函数会生成一个指针对象，每执行一次next()之后到达第一个yield暂停下一次next()从这里开始知道函数结束重新调用
const { log } = console
function * myGenerator () {
  log('开始执行')
  yield 'hello'
  log('暂停后，再次执行')
  yield 'generator'
}
const MG = myGenerator()
log(MG.next())
log(MG.next())
log(MG.next())
// for (const i of MG) {
//   log(i) // 没用啊这个方法
// }
// 使用generator函数遍历对象的方法
const obj2 = {
  [Symbol.iterator]: function * () {
    yield this.username
    yield this.age
    yield this.sex
  },
  username: 'hello', // username
  age: 18, // age
  sex: '男'// sex
}
for (const i of obj2) {
  log(i)
}
