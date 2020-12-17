// 创建一个获取新闻的函数传入url
function getNews (url) {
//  创建一个promise和ajax请求
// 新建一个promise实例
  const promise = new Promise((resolve, reject) => {
  //  新建一个ajax请求
    const xmlHttp = XMLHttpRequest()
    // 绑定ajax请求监听
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState !== 4) {
        return
      }
      if (xmlHttp.readyState === 4) {
        // 请求成功，但是还没有进行处理（数据接收完毕）
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.responseText)
          resolve(xmlHttp.responseText)
        }
        //  else {
        //   reject('{请求失败}')
        // }
      }
    }
    // open设置请求的方式以及url
    xmlHttp.open('GET', url)
    // 发送
    xmlHttp.send()
  })
  // 将promise返回提供调用方法
  return promise
}
getNews('https://www.baidu.com')
  .then((data) => {
    console.log(data)
    const commentUrl = JSON.parse(data).commentUrl
    const url = 'localhost:8080' + commentUrl
    // 多重回调可以返回promise对象让它垂直调用
    return getNews(url)
  }, (err) => {
    console.log(err)
  })
  .then((data) => {
    console.log(data)
  }, (err) => {
    console.log(err)
  })
