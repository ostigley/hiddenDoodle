import React, { Component } from 'react'
import Section from './section.js'

const socket = io()

const ids = [1,2,3]

socket.on('full corps', function(data){
  console.log("data: ", data)
})

module.exports = React.createClass({

    buttonClick (num) {
      document.getElementById(num+1).classList.remove('hide')

      console.log(this, "clicked")
      socket.emit('pane', {
        number: num, 
        pane: 'HELLO ' + Math.random()
      })
    },

    render() {

    	return (
			<main className="container">
    		<h1>hiddenDoodle</h1>
     		{ids.map( (iditem) => {
        	return (<Section id={iditem} buttonClick={this.buttonClick} />)
    		})}
  		</main>
  		)
    }

})



