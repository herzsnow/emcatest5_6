const obj = { username: 'cby', age: 21 }
// let username = obj.username
// let age = obj.age
const { username, age } = obj
console.log(username, age)
// cby 21
const { name, size } = obj
console.log(name, size)
// undefined undefined
// 数组的解构赋值
const arr = [1, 2, 5, 4, 6]
const [a, b, c, d, e] = arr
console.log(a, b, c, d, e)
const [, , f, g] = arr
console.log(f, g)
