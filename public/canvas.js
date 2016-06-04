const canvas1 = document.querySelector('#canvas-1')
const canvas2 = document.querySelector('#canvas-2')
const canvas3 = document.querySelector('#canvas-3')

canvas1.addEventListener('mouseover', (e) => (
	initiate(e)
))
canvas2.addEventListener('mouseover', (e) => (
	initiate(e)
))
canvas3.addEventListener('mouseover', (e) => (
	initiate(e)
))

var initiate = (Canvas) => {

	let canvas = Canvas.target
	console.log(canvas)

	let ctx = canvas.getContext("2d")
	let w = canvas.width
	let h = canvas.height
	let prevX = 0
	let currX = 0
	let prevY = 0
	let currY = 0

	ctx.strokeStyle= 'black'
	ctx.lineWidth = 0

	var draw = false

	canvas.addEventListener('mousedown', (Canvas) => {
		Canvas.preventDefault()
		draw = !(draw)
		updateCoords(Canvas.offsetX, Canvas.offsetY)
	})

	canvas.addEventListener('mouseup', () => {
		draw = !(draw)
	})

	canvas.addEventListener('mousemove', (Canvas) => {
		if (draw) {
				updateCoords(Canvas.offsetX, Canvas.offsetY)
				paint()
		}
		return
	})



	const paint = () => {
		ctx.beginPath()
	  ctx.moveTo(prevX, prevY)
	  ctx.lineTo(currX, currY)
	  ctx.lineWidth = 10
	  ctx.stroke()
	  ctx.closePath()
	}

	const updateCoords = (x,y) => {
		prevX = currX
		prevY = currY
		currX = x
		currY = y
	}

}


