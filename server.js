var Canvas = require('canvas')
const Image = Canvas.Image

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html')
})

var connections = 0

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

const crop = (dataURI) => {
  var peepData
  var canvas = new Canvas(700, 400)
  var ctx = canvas.getContext('2d')

  var imageObj = new Image
  imageObj.src = dataURI
        var sourceX = 0;
        var sourceY = 375;
        var sourceWidth = 700;
        var sourceHeight = 25;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = 0
        var destY = 0
        ctx.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)
        peepData = canvas.toDataURL()
  return peepData
}

