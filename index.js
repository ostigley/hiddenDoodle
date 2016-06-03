const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html')
})

var connections = 0

var memory = {
	1: [],
	2: [],
	3: []
}


io.on('connection', function(socket) {
  console.log('a doodler connected')
  var username = ''
  connections++

  socket.on('pane', function(data) {
  	console.log('pane socket hit', data, typeof data)
    memory[data.number].push(data.pane)
    console.log('memory: ', memory)
  })


	// socket.on('chat message', function(msg) {
 //    console.log('chat message socket hit, message: ', msg)
 //    socket.broadcast.emit('chat message', username + ': ' + msg)
 //  })

 //  socket.on('disconnect', function() {
 //    console.log('disconnect socket hit')
 //    connections--
 //    socket.broadcast.emit('chat message', username + ' just left the chat. There are now ' + connections.toString() + ' people in the room')
 //  })

})

http.listen(3000, function() {
  console.log('chat running on 3000')
})
