// const obj = { username: 'cby', age: 21 }
// const obj2 = { username: 'cby', age: 21 }
// let str = '我的名字是:' + obj2.username + ',年龄是:' + obj2.age
// console.log(str)
// str = `我的名字是：${obj2.username},年龄是:${obj2.age}!`
// console.log(str)

// // 模块字符串的应用非常广泛，里面可以定义函数，放入标签等功能内部还可以运算.
// str = `${1}+${2}+${9}=${12}`
// console.log(str)

// // ${}调用函数
// function foo () {
//   return 100
// }

// window.onload = function () {
//   const btn = document.createElement('button')
//   const txt = document.createTextNode('激活')
//   btn.appendChild(txt)
//   document.body.appendChild(btn)

//   // btn.onclick = myPrompt
//   // function myPrompt () {
//     // const person = prompt('请输入你的名字', 'liuyuxi')
//     // console.log(func(person))
//   // }
// // }
// // const func = name => `hello ${name + ',' + name.indexOf(`i`)}`
// // 模块字符串还可以嵌套需要在${}中嵌套内容
// console.log(`${foo()}`)
