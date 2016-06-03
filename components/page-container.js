import React, { Component } from 'react'
import Section from './section.js'

const socket = io()

const ids = [1,2,3]

socket.on('full corps', function(data){
  console.log("data: ", data)
})

module.exports = () => (
  <main className="container">
    <h1>hi</h1>
     {ids.map( (iditem) => {
        return <Section id={iditem} socket={socket} />
    })}
  </main>
)
