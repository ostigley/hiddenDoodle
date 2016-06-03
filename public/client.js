const socket = io()

function button(number) {
  console.log('button send ', number)
  socket.emit('pane', {
    number: number, 
    pane: $('#data-' + number).val()
  })
}



// var socket = io()
// $('#enterName').submit(function(e) {
//   e.preventDefault()
//   if (/[a-z, A-Z, 0-9]/g.test($('#username').val())) {
//     //socket = io()
//     initiateChat()
//   }
// })
// function initiateChat() {
//   var user = $('#username').val()
//   socket.emit('username', user)
//   $('#enterName').hide()
//   $('#chats').show()
//   $('#messages').show()
//   $('#chats').submit(function(e) {
//     e.preventDefault()
//     socket.emit('chat message', $('#m').val())
//     $('#messages').append($('<li class="you">').text('You: '+$('#m').val()))
//     // socket.broadcast.emit('chat message', $('#m').val())
//     $('#m').val('')
//     return false
//   })

//   socket.on('chat message', function(msg) {
//     var li = $('<li class="them"/>')
//     var num = 0
//     msg.split("")
//       .forEach((letter) => {
//         var p = $("<p/>", {
//           "text": letter,
//           "class": "l-letters l-letters-" + num++ % 6
//         })
//         $(li).append(p)
//       })
//       $('#messages').append(li)

//   })
// }