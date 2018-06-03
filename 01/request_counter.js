const {Server} = require('http')
const {counter} = require('counter')

const server = new Server(counter)

server.listen(8000)
