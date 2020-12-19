// async 基本使用方法
// 常用来promise
const { log } = console
async function foo () {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
    // setTimeout(function() {
    //   resolve()
    // }, 2000)
  })
}
async function test () {
  // 从开始执行到执行结束间隔两秒
  log('开始执行', new Date().toTimeString())
  await foo()
  log('执行完毕', new Date().toTimeString())
}
// 调用test函数
test()
// 定义一个测试函数普通函数用来检测await返回值
function test2 () {
  return 'hello'
}
// 定义一个检查await返回值的函数
async function asyncPrint () {
  let result = await Promise.resolve('promise')
  log(result)
  // result = await Promise.reject('失败了')
  // log(result)
  result = await test2()
}
// 调用asyncPrint检查返回值
asyncPrint()

// 获取新闻内容。利用async来调用
// jQuery的语法需要引入jQuery.js
// async function getName (url) {
//   $.ajax({
//     method: 'GET',
//     url,
//     // success: data => {resolve} // 简化版
//     success: function (data) {
//       // 将这里的data传给sendXml中的await
//       resolve(data)
//     },
// 注意这里的错误最好不要使用error否则用户就不能在看到后面的控制台提示信息了，可以将reject换成resolve用这个来调用控制台请求内容
//     error: function (error) {
//       reject()
//     }
//   })
// }
// async function sendXml (url) {
//   let result = await getName ('http://localhost:3000/news?id=7')
//   // url拿应该在data这边
//   log(result)
//   // 使用url接受下次请求的结果
//   result = await getName('http://localhost:3000' + result)
//   // 当然这里也可能没有内容获取
//   if (!result) {
//     alert('暂时没有内容')
//     return
//   }
//   log(result)
// }
// sendXml()
