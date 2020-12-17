// 箭头函数this指向定义它的环境。注意对象中的方法，它的this指的是该对象所处的环境。
// 箭头函数内部的箭头函数和它指向的this相同。
// const canvastx=document.getElementById('camvastx')
const btn1 = document.getElementById('button1')
btn1.onclick = () => {
  // canvastx.backgroundColor = 'rgba(200, 0, 0, 0.5)'
  alert('hello')
}
const obj4 = {
  username: 'jizhicheng',
  age: 19,
  getInfo () {
    return `名:${this.username}芳龄:${this.age}`
  },
  getPer () {
    console.log(this.username, this.age)
  }
}
let a = 1
const fun = a => {
  alert(a + 1)
  a++
  console.log(a)
}
fun(a)
const fun1 = (a, b) => a + b
a = fun1(1, 5)
console.log(a)
console.log(obj4)
obj4.username = 'never'
const b = obj4.getInfo()
console.log(b)
obj4.getPer()
