import React, { Component } from 'react'

module.exports = React.createClass({

  render() {

    return (
      <div>
      	<input id={ 'input-' + this.props.id } type='text' />
      	<p id={ 'output-' + this.props.id } >
      	{this.props.paragraph}
      	</p>
      </div>
    )
  }

})
