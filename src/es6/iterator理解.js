// iterator提供的一个遍历方法，每一次next()都会都会调用它的指向的value值和done是否可以再次执行的布尔值
const arr1 = [1, 5, 6, 7]
function myIterator (arr) {
  let index = 0
  return {
    next: function () {
      return index < arr.length ? { value: arr[index++], done: false } : { value: arr[index++], done: true }
    }
  }
}
// 默认情况下数组可以使用iterator属性的方法：数组,字符串，arguments,set,map等
const { log } = console
for (const i of arr1) {
  log(i)
}
// 自己创建的方法遍历数组
const myIter = myIterator(arr1)
log(myIter.next().value, myIter.next().value, myIter.next().value, myIter.next().value)

// 创建可以使用iterator的for of遍历的对象
const obj1 = {
  [Symbol.iterator]: function () {
    let index = 0
    return {
      // 自动调用这里的next()进行遍历包括done都会自动安排的
      next: function () {
        return index < this.length ? { value: this[index++], done: false } : { value: undefined, done: true }
      }
    }
  },
  username: 'hello', // username
  age: 18, // age
  sex: '男'// sex
}
// 使用for of遍历这个对象,运行失败，好像找不到这个值，或者说for of的用法错了.
for (const i of obj1) {
  log(i)
}
log(obj1.username, obj1[1])
log(obj1.age, obj1[2])
log(obj1.sex, obj1[3])
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
