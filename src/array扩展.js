// Array.prototype.indexOF()
function indexOf01 (data) {
  const arr = [2, 3, 4, 5, 1, 3, 2, 3, 4, 5, 2, 1]
  const i = arr.indexOf(data)
  console.log('打印数组首个3:' + i)
}
indexOf01(3)
// Array.prototype.lastIndexOf()
function lastIndexOf01 (data) {
  const arr = [2, 3, 4, 5, 1, 3, 2, 3, 4, 5, 2, 1]
  const i = arr.lastIndexOf(data)
  console.log('打印数组最后一个3:' + i)
}
lastIndexOf01(3)
// Array.prototype.forEach(function(item, index){})
function forEach01 () {
  const arr = [2, 3, 4, 5, 1, 3, 2, 3, 4, 5, 2, 1]
  arr.forEach(function (item, index) {
    console.log('遍历数组:', index, item)
  })
}
forEach01()
// Array.prototype.map(function(item, index){})
function map01 () {
  const arr = [2, 3, 4, 5, 1, 3, 2, 3, 4, 5, 2, 1]
  const i = arr.map(function (item, index) {
    return item + 10
  })
  console.log(i)
}
map01()
// Array.prototype.filter(function(item, index){})
function filter01 () {
  const arr = [2, 3, 4, 5, 1, 3, 2, 3, 4, 5, 2, 1]
  const i = arr.filter(function (item, index) {
    return item > 3
  })
  console.log(i)
}
filter01()
