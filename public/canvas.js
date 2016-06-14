const canvas = document.querySelectorAll('canvas')

for (i=0; i<canvas.length; i++) {
	canvas[i].addEventListener('mouseover', (e) => (
		initiate(e.path[0])
	))
}
 

var initiate = (canvas) => {


	let ctx = canvas.getContext("2d")
	let w = canvas.width
	let h = canvas.height
	let prevX = 0
	let currX = 0
	let prevY = 0
	let currY = 0

	ctx.strokeStyle= 'black'
	ctx.lineJoin = 'round'
	ctx.lineWidth = 5

	var draw = false

	canvas.addEventListener('mousedown', (Canvas) => {
		Canvas.preventDefault()
		draw = true
		updateCoords(Canvas.offsetX, Canvas.offsetY)
	})

	canvas.addEventListener('mouseup', () => {
		draw = false
	})

	canvas.addEventListener('mousemove', (Canvas) => {
		if (draw) {
				updateCoords(Canvas.offsetX, Canvas.offsetY)
				console.log(prevX, prevY)
				paint()
		}
		return
	})

	canvas.addEventListener('mouseleave', (Canvas) => {
		draw = false
	})



	const paint = () => {
		ctx.beginPath()
	  ctx.moveTo(prevX, prevY)
	  ctx.lineTo(currX, currY)
	  ctx.lineWidth = 1
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


