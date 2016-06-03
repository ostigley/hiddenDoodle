import React, { Component } from 'react'
import Canvas from './canvas'
import Cover from './cover'
import Button from './button'


module.exports = React.createClass({

  render() {

    return (
      <section id={this.props.id}>
        <p>Section {this.props.id}</p>
        <Canvas />
        <Cover id={"cover "+ this.props.id}/>
        <Button id={"button-"+ this.props.id} onClick="button()" />
      </section>
    )
  }

})



  // return (
  // <PageContainer>
  //   <App name='hiddenDoodle' />
  //   {ids
  //     .map( (id) => {
  //       <Section id={id} />
  //   })}
  // </PageContainer>,
  // document.querySelector('body')
  // )
