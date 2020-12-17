// array中使用...三点运算符
let arr = [1, 9]
const arr1 = [2, 3, 4, 5, 6, 7, 8]
arr = [1, ...arr1, 9]
console.log(...arr)
console.log(arr)
// 定义的时候写入...当运用的时候后面的书代表这个剩余值（数组）
function fun (a, b, ...value) {
  console.log(a + b)
  value.forEach(function (item, index) {
    console.log(index, item * (item - 1))
  })
}
fun(1, 2, 3, 4, 5, 6, 7, 8)
