import React, { Component } from 'react'

module.exports = React.createClass({
		  getInitialState () {
		    return {data: []};
		  },

		  buttonClick () {
		  	console.log(this.props.id, "clicked")
		  },

	  	setState () {
	  		console.log(this, "button pushed")
	  	}, 
	  	
  render() {
    return (
    	<div>
	      <button id={this.props.id} onClick={this.buttonClick} > {this.props.id} </button>


      </div>
    )
  }

})
