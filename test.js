let alex = {
  _name: 'alex',
  get name () {
    // console.log('获取值')
    // return '你好'
    return this._name
  },
  set name (val) {
    console.log('new name is ' + val)
    this._name = val
  }
}

console.log(alex.name)  // js在读取对象的值时，使用的是get方法，这个方法可以被修改
alex.name = 'imooc'
console.log(alex.name)
