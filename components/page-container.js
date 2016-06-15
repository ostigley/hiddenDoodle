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
        1: "",
        2: "",
        3: ""
      }
		},

    drawImage (canvas, data) { 
      this.setState(data)

    },

    buttonClick (num, canvas) {
      console.log("data changed?", this.state[num] !== canvas.toDataURL())
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




