import React, { Component } from 'react'
import Section from './section.js'

const socket = io()

const ids = [1,2,3]

socket.on('full corps', function(data){
	console.log("data: ", data)
	socket.page.funfunFunction(data)
})

module.exports = React.createClass({

		getInitialState () {
			socket.page = this
			return { 1: null, 2: null, 3: null}
		},

		funfunFunction (data) {
			console.log('setState called', data)
			this.setState(data)
		},

    buttonClick (num, input) {
      console.log(this, "clicked")
      this.state[num] = input
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
        	return (<Section id={iditem} buttonClick={this.buttonClick} paragraph={this.state[iditem]} />)
    		})}
  		</main>
  		)
    }

})



