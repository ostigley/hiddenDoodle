import React, { Component } from 'react'
import Canvas from './canvas'
import Cover from './cover'
import Button from './button'

module.exports = React.createClass({

  handleClick() {
    console.log('handleClick running')
    console.log('handleClick running 2', document.getElementById('input-' + this.props.id))
    this.props.buttonClick(this.props.id, document.getElementById('input-' + this.props.id).value)
  },

  render() {

    return (
      <section id={this.props.id}>
        <p>Section {this.props.id}</p>
        <Canvas id={"canvas-"+ this.props.id} paragraph={this.props.paragraph} />
        <Cover id={"cover "+ this.props.id}/>
        <Button id={"button-"+ this.props.id} onClick={this.handleClick} />
      </section>
    )
  }

})
