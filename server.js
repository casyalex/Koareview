// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('hello imooc')
// })

// server.listen(9092, () => {
//   console.log('server start on port 9092')
// })

const Woa = require('./application')
const app = new Woa()

app.use(async ctx => {
  ctx.body = 'hello woa ' + ctx.url
})
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hello imooc')
// })
app.listen(9092, () => {
  console.log('server running on port 9092')
})