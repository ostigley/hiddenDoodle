import React, { Component } from 'react'
import Section from './section.js'

const socket = io()

const ids = [1,2,3]

var canvasCount = 1

socket.on('full corps', function(data){
  let canvas = document.getElementById('canvas-'+canvasCount)
	socket.page.drawImage(canvas, data)
  canvasCount ++
})


/*
Need to change state object to include the canvas that is being udpated with new data.
SO that when socket provides new data, draw image knows where to draw it.

draw image function is not tested yet.  Doing weitd things. 

*/
module.exports = React.createClass({

		getInitialState () {
			socket.page = this
			return { 1: null, 2: null, 3: null}
		},

    drawImage (canvas, data) { 
      this.setState(data)
      let context = canvas.getContext('2d')
      context.clearRect(0,0,500,500)
      let imageObj = new Image()
      imageObj.src = this.state[canvasCount]
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0)
      };
    },

    buttonClick (num, canvas) {
      this.state[num] = canvas.toDataURL()
      console.log(this.state[num])
      // console.log("num", num, "state before sending", this.state)
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
        	return (<Section id={iditem} buttonClick={this.buttonClick} drawing={this.state[iditem]} />)
    		})}
  		</main>
  		)
    }
})