// Let用法：
// 作用和var类似，用于声明一个变量
// 特点：
// 在块作用域中有效
// 不能重复声明
// 不会预处理，不存在提升
// 应用：
// 循环遍历加监听
// 使用let代替var的趋势
const btns = document.getElementsByTagName('button')
for (let i = 0; i < btns.length; i++) {
  // 替换的const的值应该是不能改变的，有点奇怪了竟然能成功
  const btn = btns[i]
  btn.onclick = function () {
    alert(i + 1)
  }
}
// 以前使用的方式：利用闭包（i）区别产生一个函数域，不然的话变量后面的内容会将前面的覆盖也就导致了只能产生点击最后一个效果。
// var btns = document.getElementsByTagName('button')
// for (var i = 0; i < btns.length; i++) {
//   // 替换的const的值应该是不能改变的，有点奇怪了竟然能成功
//   var btn = btns[i]
//   (function (i) {
//     btn.onclick = function () {
//       alert(i + 1)
//     }
//   })(i)
// }
// let产生的作用域是块级作用域每一次产生的结果都是这个变量自己的，而不是共有的，所以上面的内容let循环会成功
// Const关键字：
// 作用：
// 定义一个常量
// 特点：
// 不能去修改
// 其他功能同let
// 应用：
// 保存不能改变的数据；
