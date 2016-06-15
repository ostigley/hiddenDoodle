import React, { Component } from 'react'
import Section from './section.js'

const socket = io()

const ids = [1,2,3]

var canvasCount = 1

socket.on('full corps', function(data){
  let canvas = document.getElementById('canvas-'+canvasCount)
	socket.page.drawImage(canvas, data)
  console.log(data)
  canvasCount ++
})


module.exports = React.createClass({

		getInitialState () {
			socket.page = this
			return { 
        1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
      }
		},

    drawImage (canvas, data) { 
      this.setState(data)
      // let context = canvas.getContext('2d')
      // context.clearRect(0,0,500,500)
      // let imageObj = new Image()
      // imageObj.src = this.state[canvasCount]
      // imageObj.onload = function() {
      //   context.drawImage(imageObj, 0, 0)
      // };
    },

    buttonClick (num, canvas) {
      this.state[num] = canvas.toDataURL()
      socket.emit('pane', {
        number: num,
        pane: this.state
      })
    },

    render() {

    	return (
			<main className="container">
    		<h1>hiddenDoodle</h1>
     		{ids.map( (iditem) => {
        	return (<Section id={iditem} buttonClick={this.buttonClick} drawing={this.state[iditem]}/>)
    		})}
  		</main>
  		)
    }
})




