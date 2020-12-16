// object.create(prototype,description)
const obj = { firstname: 'kobe', lastname: 'ron' }
let obj1 = {}
obj1 = Object.create(obj, {
  sex: {
    value: '男',
    writable: true,
    configurable: true,
    enumerable: true
  }
})
console.log(obj1)
obj1.sex = '女'
console.log(obj1)
delete obj1.sex
console.log(obj1.sex)
for (const i in obj1) {
  console.log(i)
}
// object.defineProperty(object,descriptors)
Object.defineProperties(obj1, {
  fullname: {
    get: function () {
      return this.firstname + ' ' + this.lastname
    },
    set: function (data) {
      const names = data.split(' ')
      this.firstname = names[0]
      this.lastname = names[1]
    }
  }
})
console.log(obj1)
console.log(obj1.fullname)
obj1.fullname = 'rose jack'
console.log(obj1.fullname)
