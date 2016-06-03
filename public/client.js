const socket = io()

function button(number) {
  console.log('button send ', number)
  socket.emit('pane', {
    number: number, 
    pane: $('#data-' + number).val()
  })
}

socket.on('full corps', function(data){
  console.log("data: ", data)
})
