import Crop from        './lib/image-functions.js'

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html')
})



var waitingUsers = {
	1: [],
	2: [],
	3: []
}

function returnPanes (number) {
	if (waitingUsers[number].length < 3) {
    // console.log('should see peep: ', waitingUsers[number][0].pane)

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

var connections = 0
io.on('connection', function(socket) {
  console.log('a doodler connected')
  
  var user = connections++

  socket.on('pane', function(data) {
    const index = waitingUsers[data.number].length
    waitingUsers[data.number].push({
      user: user,
      socket: socket,
      pane: data.pane
    })
    waitingUsers[data.number][index].pane.pane[data.number+1].peep = crop(data.pane.pane[data.number].current)
    waitingUsers[data.number][index].pane.level += 1
    console.log('data updated', waitingUsers)
    returnPanes(data.number)

  })

})

http.listen(3000, function() {
  console.log('chat running on 3000')
})



