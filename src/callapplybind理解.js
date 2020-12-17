// Function.prototype.bind(obj)
// 作用是将函数内的this绑定为obj，并将函数返回
const cby = { username: 'caobingyong', size: 18 }
const gj = { username: 'gaoju', size: 17 }
function foo (data1, data2) {
  console.log(this.username, this.size)
  if (data1 && !data2) {
    console.log(data1)
  }
  if (data2 && !data1) {
    console.log(data2)
  }
  if (data1 && data2) {
    console.log(data1, data2)
  }
}
const bar = foo.bind(cby)
const bar2 = foo.bind(gj)

// bind()和call()、apply（）的区别
// 都能绑定this
// call、apply是立即调用函数
// bind是将函数返回
foo.call(cby, 'hello', 'ye')
foo.apply(gj, ['jojo', 'wendo'])
bar()
bar2()
