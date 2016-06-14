import Express from 'express'
import http from 'http'
import IO from 'socket.io'

export default function Server (store) {

	const app = Express()
	const server = http.Server(app)
	const io = IO(server)
	const port = 3000

	app.use(Express.static('public'))

	app.get('/', (req, res) => {
		res.sendFile(__dirname + '/public/index.html')
	})

	io.on('connection', (socket) => {
		console.log('Exquisite Corps -- user connected')

		socket.on('pane', (data) => {
			console.log('Exquisite Corps -- pane data recieved')
			store.dispatch({
				type: 'ADD_PANE',
				user: user,
				pane: data.pane,
				paneNumber: data.number
			})
		})

	})

	http.listen(port, () => {
		console.log('Exquisite Corps -- running on port ' + port)
	})

}