async function fn1 (next) {
  console.log('fn1')
  await next()
  console.log('end fn1')
}

async function fn2 (next) {
  console.log('fn2')
  await delay()
  await next()
  console.log('end fn2')
}

async function fn3 (next) {
  console.log('fn3')
}

function delay () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

function compose (middlewares) {
  return function () {
    return dispatch(0)

    function dispatch(i) {
      let fn = middlewares[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(fn(function next() {
        return dispatch(i+1)
      }))
    }
  }
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()


// function add (x, y) {
//     return x+y
// }

// function double (z) {
//   return z*2
// }
// const res1 = add(1, 2)
// const res2 = double(res1)
// console.log(res2)

// const res3 = double(add(1, 2))
// console.log(res3)

// const middlewares = [add, double]
// let len = middlewares.length
// function compose (midds) {
//   return (...args) => {
//     // 初始值
//     let res = midds[0](...args)
//     for(let i=1;i<len;i++){
//       res = midds[i](res)
//     }
//     return res
//   }
// }

// const fn = compose(middlewares)
// const res = fn(1, 2)
// console.log(res)

// let alex = {
//   _name: 'alex',
//   get name () {
//     // console.log('获取值')
//     // return '你好'
//     return this._name
//   },
//   set name (val) {
//     console.log('new name is ' + val)
//     this._name = val
//   }
// }

// console.log(alex.name)  // js在读取对象的值时，使用的是get方法，这个方法可以被修改
// alex.name = 'imooc'
// console.log(alex.name)
