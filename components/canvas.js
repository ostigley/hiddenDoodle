import React, { Component } from 'react'

module.exports = ({id, drawing}) => (
	<canvas 
		id={id} 
		width="500px" 
		height="500px"
		ref={(canv) => {
			var context = canv.getContext('2d')
      context.clearRect(0,0,500,500)
      var imageObj = new Image()
      imageObj.src = drawing
      imageObj.onload = function() { 
      	context.drawImage(imageObj, 0, 0)
      }
		}
		}>
		<img src={drawing}/>
	</canvas>
)
