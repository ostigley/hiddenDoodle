import React, { Component } from 'react'
import Section from './section.js'
// var io = require('socket.io')()

const socket = io()

// const ids = [1,2,3]

var canvasCount = 1

socket.on('full corps', function(data){
  console.log(data)
  let canvas = document.getElementById('canvas-'+canvasCount)
	socket.page.drawImage(canvas, data)
  canvasCount ++
})


module.exports = React.createClass({

		getInitialState () {
			socket.page = this

			return {
        pane: { 
          1: {
              current: "",
              peep: ""
            },
          2: {
            current: "",
            peep: ""
          },
          3: {
            current: "",
            peep: ""
          }
        },
        level: 1
      }
		},

    drawImage (canvas, data) { 
      this.setState(data)

    },

    buttonClick (num, canvas) {
      this.state.pane[this.state.level].current = canvas.toDataURL()
      socket.emit('pane', {
        number: num,
        pane: this.state
      })
    },

    render() {
      const location = this.state.pane[this.state.level]
    	return (
			<main className="container">
    		<h1>hiddenDoodle</h1>
     		 	<Section id={this.state.level} buttonClick={this.buttonClick} peep={location.peep} drawing={location.current}/>
    		
  		</main>
  		)
    }
})




