import Canvas from 'canvas'  //canvas manipulation outside of the browser

const Image = Canvas.Image

export default const crop = (doodleData, percentage = 0.9) => {
  let peepData
  let canvas = new Canvas(700, 400)
  let ctx = canvas.getContext('2d')

  let imageObj = new Image
  imageObj.src = doodleData
  let peepX = 0;
  let peepY = 375;
  let peepWidth = 700;
  let peepHeight = 25;
  let destWidth = peepWidth;
  let destHeight = peepHeight;
  let destX = 0
  let destY = 0
  ctx.drawImage(imageObj, peepX, peepY, peepWidth, peepHeight, destX, destY, destWidth, destHeight)
  peepData = canvas.toDataURL()
  return peepData
}