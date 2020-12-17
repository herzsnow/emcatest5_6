// 对象简写方法，如果有已存在的值可以使用简写使用直接变量标识这个变量是成为它的属性
// 第二种是对象中的方法的使用
let obj3 = { }
let username1 = 'hello'
let age1 = 15
obj3 = {
  username1,
  age1,
  getInfo () {
    return `名字是：${this.username1},年龄是${this.age1}`
  }
}
console.log(obj3)
console.log(obj3.getInfo())
username1 = 'jack'
age1 = '39'
console.log(obj3.getInfo())
