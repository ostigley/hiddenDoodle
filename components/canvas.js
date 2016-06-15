import React, { Component } from 'react'


export default class Canvas extends React.Component{

	componentDidMount () {
		console.log("component did mount")
		return this.updateDrawing()
	}

	componentDidUpdate() {
		return this.updateDrawing()
	}

	updateDrawing () {
		var context = this.canv.getContext('2d')
    context.clearRect(0,0,500,500)
    var imageObj = new Image()
    imageObj.src = this.props.drawing
    imageObj.onload = function() { 
    	context.drawImage(imageObj, 0, 0)
    }
	}

	render () {
		return (
			<canvas 
				id={this.props.id} 
				width="500px" 
				height="500px"
				ref={(c) => this.canv = c}
				>
			</canvas>

		)
	}
}