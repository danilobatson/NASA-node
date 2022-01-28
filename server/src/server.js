const http = require('http');
const app = require('./app')
const path = require('path')

const PORT = process.env.PORT || 8000

const server = http.createServer(app)



// app.use()
// app.get()
//app.post('/', express)


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`)
})
