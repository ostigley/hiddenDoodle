import React, { Component } from 'react'


module.exports = React.createClass({

  render() {

    return (
      <section id={this.props.id}>
        <p>Section {this.props.id}</p>
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
