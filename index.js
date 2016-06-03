const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html')
})

var connections = 0

// var memory = {
// 	1: [],
// 	2: [],
// 	3: []
// }

var waitingUsers = {
	1: [],
	2: [],
	3: []
}


function returnPanes (number) {
	if (waitingUsers[number].length < 3) {
		console.log('returnPanes can\'t return pane number:', number, 'only', waitingUsers[number].length, 'people waiting')
		return
	}

  waitingUsers[number][0].socket.emit('full corps', waitingUsers[number][1].pane)
  waitingUsers[number][1].socket.emit('full corps', waitingUsers[number][2].pane)
  waitingUsers[number][2].socket.emit('full corps', waitingUsers[number][0].pane)

 	waitingUsers[number].shift()
 	waitingUsers[number].shift()
 	waitingUsers[number].shift()
}


io.on('connection', function(socket) {
  console.log('a doodler connected')
  
  var user = connections++

  socket.on('pane', function(data) {
  	console.log('pane socket hit', data, typeof data)

    // memory[data.number].push({
    // 	user: user,
    // 	pane: data.pane
    // })

    waitingUsers[data.number].push({
  		user: user,
  		socket: socket,
  		pane: data.pane
    })

    returnPanes(data.number)

    console.log('waitingUsers: ', waitingUsers)

    // this user now needs a pane back, same number as the one they contributed, but form someone else

    // pane is hit, someone is contributing a pane
    // cool save their pane

    // save this person as waiting for this number pane

    // check if panes can be sent back

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
