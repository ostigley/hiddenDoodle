import Canvas from 'canvas'  //canvas manipulation outside of the browser

const Image = Canvas.Image

export default (doodleData, width = 700, height = 400, percentage = 0.9) => {
  let peepData
  let canvas = new Canvas(width, height)
  let ctx = canvas.getContext('2d')

  let imageObj = new Image
  imageObj.src = doodleData
  let sx = 0
  let sy = height * percentage
  let sWidth = width
  let sHeight = height * (1-percentage)
  let dx = 0
  let dy = sy
  let dWidth = sWidth;
  let dHeight = sHeight;
  ctx.drawImage(
    imageObj, 
    sx, 
    sy, 
    sWidth, 
    sHeight, 
    dx, 
    dy, 
    dWidth, 
    dHeight)
  peepData = canvas.toDataURL()
  return peepData
}

